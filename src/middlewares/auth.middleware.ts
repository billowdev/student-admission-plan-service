import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Import the necessary interfaces and models
import db from '../database/models';

import { JWT_SECRET } from '../common/constants/common.constants';
import userService from 'modules/user/services/user.service';

const User = db.User

interface TokenPayload {
  id: number;
  role: string;
  exp: number;
}

class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const token = req.headers.authorization?.split(' ')[1] as string;
    if (!token) {
      res.status(401).json({ message: 'No token provided' });
    } else {
      const decodedToken = jwt.verify(token,  JWT_SECRET as string) as TokenPayload;
      if (new Date().getTime() > decodedToken.exp * 1000) {
        throw new AuthError('Token expired');
      }
      const user = await User.findByPk(decodedToken.id, { raw: true });


      if (!user) {
        throw new AuthError('Unauthorized');
      }

      req.user = user;
      next();
    }
  } catch (error) {
    console.error(error);

    if (error instanceof AuthError) {
      res.status(401).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export const roleMiddleware = (role: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!("user" in req)) {
      throw new Error("Request object without user found unexpectedly");
    }

    const userRole = req.user!.role;

    if (userRole !== role) {
      res.status(403).json({ message: `Only ${role}s can access this resource` });
    } else {
      next();
    }
  };
};

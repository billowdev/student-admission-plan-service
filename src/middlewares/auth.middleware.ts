import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Import the necessary interfaces and models
import db from '../database/models';

const User= db.User

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

// Define the middleware function
export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'No token provided' });
    } else {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;

      if (new Date().getTime() > decodedToken.exp * 1000) {
        throw new AuthError('Token expired');
      }

      const user = await User.findByPk(decodedToken.id);

      if (!user || user.role !== decodedToken.role) {
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

// Define the middleware function
// export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   try {
//     // Get the token from the Authorization header
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) throw new Error('Authorization failed');

//     // Verify the token and decode the payload
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;

//     // Find the user by ID and check if they have the required role
//     const user = await User.findByPk(decodedToken.id);
//     if (!user || user.role !== decodedToken.role) throw new Error('Authorization failed');

//     // Add the user object to the request object and proceed to the next middleware/route handler
//     req.user = user;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ error: 'Authorization failed' });
//   }
// };

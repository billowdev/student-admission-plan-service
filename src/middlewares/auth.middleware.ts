import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Import the necessary interfaces and models
import db from '../models';
const UserModel = db.UserModel
interface TokenPayload {
  id: number;
  role: string;
}

// Define the middleware function
export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Get the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('Authorization failed');

    // Verify the token and decode the payload
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;

    // Find the user by ID and check if they have the required role
    const user = await UserModel.findByPk(decodedToken.id);
    if (!user || user.role !== decodedToken.role) throw new Error('Authorization failed');

    // Add the user object to the request object and proceed to the next middleware/route handler
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Authorization failed' });
  }
};

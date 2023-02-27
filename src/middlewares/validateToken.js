import jwt from 'jsonwebtoken';
import { dataToken } from '../config.js';

export const verifyToken = async (req, res, next) => {
  try {
    const { secret } = dataToken;
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, secret);
    if (Date.now() > payload.exp)
      return es.status(401).json({ message: 'Token Expired' });
    next();
  } catch (error) {
    return res.status(401).json({ errr: error.message });
  }
};

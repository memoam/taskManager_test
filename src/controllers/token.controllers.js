import jwt from 'jsonwebtoken';
import { dataToken } from '../config.js';

export const createToken = (req, res) => {
  try {
    const { secret } = dataToken;
    const { id: sub, name } = { id: 1, name: 'root' };
    const token = jwt.sign(
      {
        sub,
        name,
        exp: Date.now() + 14400 * 1000,
      },
      secret
    );
    res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' });
  }
};

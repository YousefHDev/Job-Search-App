import jwt from 'jsonwebtoken';

// Verify JWT Token
export const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// Check User Role
export const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Access denied. You are not authorized.' });
  }
  next();
};

//socket.io
export const isHRorOwner = (req, res, next) => {
  const { role } = req.user;

  if (role !== 'hr' && role !== 'company') {
    return res.status(403).json({ message: 'Only HR or company owners can initiate a conversation.' });
  }

  next();
};
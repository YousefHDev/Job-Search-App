export const ROLES = {
    USER: 'user',
    ADMIN: 'admin',
    COMPANY: 'company',
  };
  
  export const JOB_TYPES = {
    FULL_TIME: 'full-time',
    PART_TIME: 'part-time',
    REMOTE: 'remote',
    INTERNSHIP: 'internship',
  };
  
  export const APPLICATION_STATUS = {
    PENDING: 'pending',
    ACCEPTED: 'accepted',
    REJECTED: 'rejected',
  };
  
  export const EMAIL_CONFIG = {
    SERVICE: 'gmail',
    FROM: process.env.EMAIL,
    PASSWORD: process.env.EMAIL_PASSWORD,
  };
  
  export const CORS_OPTIONS = {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  export const RATE_LIMIT_OPTIONS = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  };
  
  export const TOKEN_EXPIRES_IN = {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN_EXPIRES_IN || '1h',
    REFRESH_TOKEN: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
  };
import Joi from 'joi';

export const authSchemas = {
  signUp: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
  signIn: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

export const userSchemas = {
  updateUser: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    mobileNumber: Joi.string(),
    DOB: Joi.date(),
    gender: Joi.string(),
  }),
};

export const companySchemas = {
  addCompany: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    description: Joi.string(),
    website: Joi.string(),
    ownerId: Joi.string().required(),
  }),
};

export const jobSchemas = {
  addJob: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    companyId: Joi.string().required(),
    skillsRequired: Joi.array().items(Joi.string()),
    location: Joi.string(),
    salary: Joi.string(),
    jobType: Joi.string().valid('full-time', 'part-time', 'remote', 'internship'),
  }),
};

export const applicationSchemas = {
  applyForJob: Joi.object({
    jobId: Joi.string().required(),
    userId: Joi.string().required(),
  }),
};
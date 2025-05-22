import Joi from 'joi';

export const signupSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required().messages({
    'string.empty': 'First name is required',
    'string.min': 'First name should have at least 2 characters',
  }),
  lastName: Joi.string().min(2).max(30).required().messages({
    'string.empty': 'Last name is required',
    'string.min': 'Last name should have at least 2 characters',
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Enter a valid email',
    'string.empty': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password should be at least 6 characters',
    'string.empty': 'Password is required',
  }),
});
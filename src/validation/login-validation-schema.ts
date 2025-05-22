import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.email': 'Invalid email format',
    'string.empty': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 6 characters',
  }),
});

export default loginSchema;

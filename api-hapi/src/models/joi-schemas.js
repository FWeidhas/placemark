import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required()
};

export const PoiSpec = {
  name: Joi.string().required()
};

export const DetailsSpec = {
  description: Joi.string().required(),
  latitude: Joi.number().min(-90).max(90).precision(8).required(),
  longitude: Joi.number().min(-180).max(180).precision(8).required(),
};

import joi from "joi";

export const addtourValidationSchema = joi.object({
  imageUrl: joi.string().required(),
  tourName: joi.string().required().min(2),
  tourDescription: joi.string().required().min(2),
  tourPrice: joi.string().required(),
  tourStartDate: joi.string().required(),
  tourEndDateName: joi.string().required(),
  tourCount: joi.string().required(),
});

export const validateTourId = joi.object().keys({
  tourID: joi.string().required(),
});
import joi from "joi";

export const bookingValidation = joi.object().keys({
  tourID: joi.string().required(),
  userID: joi.string().required(),
  totalBookCount: joi.number().min(1).required(),
  totalprice: joi.number().required()
});

export const validateBookID = joi.object().keys({
  bookID: joi.string().min(8).required(),
});
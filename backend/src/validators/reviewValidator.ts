import joi from "joi";

export const addreviewValidationSchema = joi.object({
  reviewContent: joi.string().required(),
  tourID: joi.string().required(),
  userID: joi.string().required(),
});

export const validaterReviewId = joi.object().keys({
  reviewID: joi.string().required(),
});
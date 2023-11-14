import Joi from "joi";

export const regUserValidation = Joi.object({
    fullName: Joi.string().required().min(3).max(30),
    email : Joi.string().required().email({
        minDomainSegments:2, tlds:{
            allow: ['com', 'ke']
        }
    }),
    password: Joi.string().required().pattern(
        new RegExp('^[a-zA-Z0-9!@#$%^&*()]{3,30}$')
    )
})

export const loginUserValidation=Joi.object({
    email: Joi.string().required().email({
        minDomainSegments:2, tlds:{
            allow: ['com', 'ke']
        }
    }),
    password: Joi.string().required().pattern(
        new RegExp('^[a-zA-Z0-9!@#$%^&*()]{3,30}$')
    )

})
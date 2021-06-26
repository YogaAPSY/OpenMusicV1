const Joi = require('joi');
 
const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  performer: Joi.string().required(),
  genre: Joi.string(),
  duration: Joi.number(),
  // performer: Joi.array().items(Joi.string()).required(),
});
 
module.exports = { SongPayloadSchema };
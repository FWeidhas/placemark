import Joi from "joi";


// export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");
export const IdSpec =  Joi.alternatives().try(Joi.string().regex(/^[0-9a-fA-F]{24}$/) , Joi.object()).description("a valid ID");

// export const IdSpec = Joi.object({
//   id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
// }).description("A valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
  isAdmin: Joi.boolean().example(false),
  createdAt: Joi.date().iso().optional().example("2023-07-02T10:30:00Z"),
  updatedAt: Joi.date().iso().optional().example("2023-07-02T10:30:00Z"),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");


export const DetailsSpec = Joi.object()
  .keys({
    description: Joi.string().required().example("Die bayerische Stadt Regensburg liegt an der Donau im Südosten Deutschlands und ist für ihr gut erhaltenes mittelalterliches Zentrum bekannt. Eines ihrer Wahrzeichen ist die Steinerne Brücke aus dem 12. Jh. Sie ist 310 m lang, hat 16 Bögen und verbindet den Stadtteil Stadtamhof mit der Altstadt. Ein weiteres wichtiges Wahrzeichen ist der gotische Dom aus dem 13. Jh. mit seinen Zwillingstürmen. Hier sind die Regensburger Domspatzen zu Hause. In der Walhalla, einer im Stil des Parthenon erbauten Gedenkstätte östlich der Stadt, werden bedeutende deutsche Persönlichkeiten geehrt."),
    latitude: Joi.number().min(-90).max(90).precision(8).required().example(49.0134297),
    longitude: Joi.number().min(-180).max(180).precision(8).required().example(12.1016236),
    poiid: IdSpec,
}).label("Details");

export const DetailsSpecPlus = DetailsSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("DetailsPlus");
  

export const DetailsArraySpec = Joi.array().items(DetailsSpecPlus).label("DetailsArray");

export const PoiSpec = Joi.object()
  .keys({
    name: Joi.string().required().example("Regensburg"),
    category: Joi.string().required().example("River"),
    userid: IdSpec,
    details: DetailsSpecPlus.optional().allow(null),
    img: Joi.array().items(Joi.string().allow("")).optional().allow(null),
    createdAt: Joi.date().iso().optional().example("2023-07-02T10:30:00Z"),
    updatedAt: Joi.date().iso().optional().example("2023-07-02T10:30:00Z"),
  })
  .label("Point of Interest");

export const PoiSpecPlus = PoiSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("Point of Interest Plus");

export const PoiArraySpec = Joi.array().items(PoiSpecPlus).label("Points of Interest Array");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");

export const JwtAuthPlus = JwtAuth.keys({
  id : IdSpec.required(),
}).label("JwtAuthPlus")
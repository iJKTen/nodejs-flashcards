'use strict';

const validate = (schema) => {
  return (req, res, next) => {
    const {error} = schema.validate(req.body);
    if (error != null) {
      return res.status(400).json(error.details[0]);
    } else {
      next();
    }
  };
};

module.exports = validate;

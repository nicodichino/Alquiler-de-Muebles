const { validationResult } = require('express-validator');

const validateValidationChain = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    return next();
};

module.exports = { validateValidationChain };

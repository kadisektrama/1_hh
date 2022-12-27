import Ajv from "ajv";

export const validator = (scheme) => (req, res, next) => {
    const ajv = new Ajv({allErrors: true});
    const validate = ajv.compile(scheme);

    const valid = validate(req.body);

    if (valid) {
        return next();
    }

    const errors = validate.errors.map(({message}) => message).join(', ')

    res.status(400).json({ message: errors })
}
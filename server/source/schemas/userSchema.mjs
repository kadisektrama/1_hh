export const createUser = {
    'type': 'object',
    'properties': {
        'first_name': {
            'type': 'string',
            'minLength': 3,
        },
        'last_name': {
            //'format': 'email',
            'type': 'string',
            'minLength': 3,
        },
    },
    'required': ['first_name', 'last_name'],
    'additionalProperties': false,
}
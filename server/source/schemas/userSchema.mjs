export const createUser = {
    'type': 'object',
    'properties': {
        'name': {
            'type': 'string',
            'minLength': 3
        },
        'email': {
            //'format': 'email',
            'type': 'string',
        }
    },
    'required': ['name', 'email'],
    'additionalProperties': false
}
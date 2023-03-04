export const createUserSchema = {
    'type': 'object',
    'properties': {
        'first_name': {
            'type': 'string',
            'minLength': 6,
        },
        'last_name': {
            'type': 'string',
            'minLength': 6,
        },
        'roles': {
            //'enum': ['guest', 'host', 'admin'],
            'type': 'string',
        },
        'user_name': {
            'type': 'string',
            'minLength': 6,
        },
        'email': {
            //'format': 'email',
            'type': 'string',
            'minLength': 6,
        },
        'phone': {
            //'format': 'phone',
            'type': 'string',
            'minLength': 6,
        },
    },
    'required': ['first_name', 'last_name', 'roles'],
    'additionalProperties': false,
}
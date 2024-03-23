// api/controllers/logout.js
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

module.exports = {
    friendlyName: 'User logout',

    description: 'Invalidate JWT token for user logout.',

    inputs: {
        token: {
            type: 'string',
            required: true,
            description: 'JWT token to be invalidated.',
        },
    },

    exits: {
        success: {
            statusCode: 200,
            description: 'User logged out successfully.',
        },
        invalidToken: {
            statusCode: 401,
            description: 'Invalid or expired token.',
        },
        serverError: {
            statusCode: 500,
            description: 'Internal server error.',
        },
    },

    fn: async function(inputs, exits) {
        try {
            // Verify the JWT token
            const decodedToken = jwt.verify(inputs.token, secretKey);

            // Perform additional actions if needed, such as logging out the user from the session or invalidating any associated tokens

            return exits.success({
                message: 'User logged out successfully.',
            });
        } catch (error) {
            if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
                return exits.invalidToken({ message: 'Invalid or expired token.' });
            } else {
                return exits.serverError({ message: 'An internal server error occurred.' });
            }
        }
    },
};

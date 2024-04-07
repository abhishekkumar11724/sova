// api/controllers/login.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY

module.exports = {  
    friendlyName: 'User login',

    description: 'Authenticate user and generate JWT token.',

    inputs: {
        emailAddress: {
            type: 'string',
            required: true,
            isEmail: true,
            description: 'The email address of the user.',
            maxLength: 120,
        },
        password: {
            type: 'string',
            required: true,
            description: 'The password of the user.',
        },
    },

    exits: {
        success: {
            statusCode: 200,
            description: 'User logged in successfully.',
        },
        invalid: {
            statusCode: 401,
            description: 'Invalid email or password.',
        },
        serverError: {
            statusCode: 500,
            description: 'Internal server error.',
        },
    },

    fn: async function(inputs, exits) {
        try {
            // Find the user by email address
            const user = await Profile.findOne({ emailAddress: inputs.emailAddress });
            if (!user) { 
                return exits.invalid({
                    mesasge: "no user found",
                }) 
            }

            console.log(secretKey)

            // Compare the provided password with the hashed password in the database
            const passwordMatch = (inputs.password === user.password);
            if (!passwordMatch) {
                return exits.invalid({
                    mesasge: 'incorrect password'
                }) 
            }

            // Generate JWT token
            const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

            return exits.success({
                message: 'User logged in successfully.',
                token: token,
                user: user,
            });
        } catch (error) {
            if (error === 'invalid') {
                return exits.invalid({ message: 'Invalid email or password.' });
            } else {
                return exits.serverError({ message: 'An internal server error occurred.' });
            }
        }
    },
};

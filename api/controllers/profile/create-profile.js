// api/controllers/create-profile.js

module.exports = {
    friendlyName: 'Create profile',

    description: 'Sign up and create a new profile.',

    inputs: {
        fullName: {
            type: 'string',
            required: true,
            description: 'The full name of the user.',
            maxLength: 120,
        },
        emailAddress: {
            type: 'string',
            required: true,
            unique: true,
            isEmail: true,
            description: 'The email address of the user.',
            maxLength: 120,
        },
        password: {
            type: 'string',
            required: true,
            description: 'The password of the user.',
        },
        // Add other inputs as needed
    },

    exits: {
        success: {
            description: 'New profile created successfully.',
        },
        emailAlreadyInUse: {
            statusCode: 409,
            description: 'The provided email address is already in use.',
        },
        invalid: {
            statusCode: 400,
            description: 'The provided data is invalid.',
            extendedDescription: 'Please check the provided data and try again.',
        },
    },

    fn: async function(inputs, exits) {
        // Check if the email address is already in use
        const existingUser = await Profile.findOne({ emailAddress: inputs.emailAddress });
        if (existingUser) {
            throw 'emailAlreadyInUse';
        }

        // Create the new profile
        const newProfile = await Profile.create({
            fullName: inputs.fullName,
            emailAddress: inputs.emailAddress,
            password: inputs.password,
            // Add other fields here
        }).fetch();

        // If you want to perform additional actions after creating the profile, do it here

        return exits.success({
            message: 'New profile created successfully.',
            profile: newProfile,
        });
    },
};



module.exports = {
    friendlyName: "Create Event",
    description: "create a new Event after profile auth",
    inputs: {
        eventName: {
            type: 'string',
            required: true,
        },
        eventDescription: {
            type: 'string'
        }
    },
    exits: {
        success: {
            description: "new Event created successfully",
            statusCode: 200,
        },
        error: {
            description: "Error Occurred !",
            statusCode: 404
        }
    },

    fn: async function(inputs, exits) {

        const user = this.req.user;

        const newEvent = await Event.create({
            eventName: inputs.eventName,
            eventDescription: inputs.eventDescription,
            eventOrganizer: user.id
        })

        return exits.success({
            obj: inputs,
            message: "success"
        } )
    }
}
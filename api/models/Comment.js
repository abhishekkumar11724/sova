module.exports = {


    attributes: {
        text: { 
            type: 'string', 
            required: true 
        },

        taskRelatedTo: {
            model: "Task",
            Required: true,
        },

        commentedBy: {
            model: 'Profile'
        },
    }
}
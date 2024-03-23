module.exports = {

    attributes: {
        
        issueName: {
            type: 'string',
            required: true,
            maxLength: 120
        },
        
        raisedAt: {
            type: 'number', // or 'string' depending on how you store your dates
            required: true
        },

        issueDescription: {
            type: 'text',
            required: true
        },

        raisedBy: {
            model: 'Profile' 
        },

        taskRelatedTo: {
            model: 'Task' 
        },

        eventRelatedTo: {
            model: 'Event' 
        },

        groupRelatedTo: {
            model: 'Group'
        },

        status: {
            type: 'string',
            enum: ['Open', 'In Progress', 'Resolved', 'Closed'],
            defaultsTo: 'Open'
        },

        priority: {
            type: 'string',
            enum: ['High', 'Medium', 'Low'],
            defaultsTo: 'Medium'
        },

        resolvedAt: {
            type: 'number' 
        },

        resolutionDetails: {
            type: 'text' 
        },
    
        // additional_fields: {
        //     type: 'json' 
        // },
    
        // comments: {
        //     collection: 'Comment', 
        //     via: 'issue'
        // },
        // attachments: {
        //     collection: 'Attachment', 
        //     via: 'issue'
        // },
    
        },

        beforeCreate: async function (values, proceed) {
            if (!values.raisedAt) {
                values.raisedAt = new Date();
            }
            return proceed();
        }
    };
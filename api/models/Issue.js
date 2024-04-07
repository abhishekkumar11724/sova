module.exports = {

    attributes: {
        id: { type: 'string', columnName: '_id' },
        issueName: { type: 'string', required: true, maxLength: 120 },
        raisedAt: { type: 'number', required: true },
        issueDescription: { type: 'string', required: true },
        raisedBy: { model: 'Profile' },
        taskRelatedTo: { model: 'Task' },
        eventRelatedTo: { model: 'Event' },
        groupRelatedTo: { model: 'Group' },
        status: { type: 'string', isIn: ['Open', 'In Progress', 'Resolved', 'Closed'], defaultsTo: 'Open' },
        priority: { type: 'string', isIn: ['High', 'Medium', 'Low'], defaultsTo: 'Medium' },
        resolvedAt: { type: 'number' },
        resolutionDetails: { type: 'string' },
        // additional_fields: { type: 'json'  },
        // comments: { collection: 'Comment', via: 'issue' },
        // attachments: { collection: 'Attachment',  via: 'issue' },
        },

        beforeCreate: async function (values, proceed) {
            if (!values.raisedAt) {
                values.raisedAt = new Date();
            }
            return proceed();
        }
    };
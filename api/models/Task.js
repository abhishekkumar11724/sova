module.exports = {

    attributes: {

        taskName: {
            type: 'string',
            required: true,
            maxLength: 120
        },

        taskDescription: {
            type: 'text',
            required: true
        },

        comments: {
            collection: 'Comment',
            via: 'taskRelatedTo'
        },

        taskCreatedAt: {
            type: 'datetime',
            defaultsTo: () => new Date()
        },

        taskCompletedAt: {
            type: 'datetime'
        },

        taskCreatedBy: {
            model: 'Profile'
        },

        taskAssignedTo: {
            model: 'Profile'
        },

        Attachments: {
            type: 'json', 
            columnType: 'array'
        },

        eventRelatedTo: {
            model: 'Event'
        },

        groupRelatedTo: {
            model: 'Group'
        },

        issueList: {
            collection: 'Issue',
            via: "taskRelatedTo"
        }

    }

}
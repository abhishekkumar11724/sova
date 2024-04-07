module.exports = {

    attributes: {
        id: { type: 'string', columnName: '_id' },
        taskName: {type: 'string', required: true, maxLength: 120},
        taskDescription: {type: 'string',required: true},
        comments: {collection: 'Comment',via: 'taskRelatedTo'},
        taskCreatedAt: {type: 'number',},
        taskCompletedAt: {type: 'number'},
        taskCreatedBy: {model: 'Profile'},
        taskAssignedTo: {model: 'Profile'},
        Attachments: {type: 'json', columnType: 'array'},
        eventRelatedTo: {model: 'Event'},
        groupRelatedTo: {model: 'Group'},
        issueList: {collection: 'Issue',via: "taskRelatedTo"}
    }
}
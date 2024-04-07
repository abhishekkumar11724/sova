// 
// Events.js : model for which attribute to store in db
// 

module.exports = {
    attributes: {
        id: { type: 'string', columnName: '_id' },
        eventName: { type: 'string', maxLength: 120, required: true, },
        startDate: { type: 'number', autoCreatedAt: true },
        endDate: { type: 'number', },
        eventDescription: { type: 'string' },
        eventOrganizer: { model: 'Profile', required: true, },
        eventMemberList: { collection: "Profile", },
        groupList: { collection: 'Group', via: "eventRelatedTo" },
        taskList: { collection: 'task', via: 'eventRelatedTo' },
        issueList: { collection: 'Issue', via: 'eventRelatedTo' },
    }
};
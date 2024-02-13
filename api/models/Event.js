// 
// Events.js : model for which attribute to store in db
// 

module.exports = {
    
    eventName: {
        type: 'string',
        maxLength: 120,
        required: true,
    },

    startDate: {
        type: 'datetime',
        require: true,
    },
    
    endDate: {
        type: 'datetime',
    },
    
    eventDescription: {
        type: 'text' 
    },
    
    eventOrganizer: {
        model: 'Profile',
        required: true,
    },

    eventMemberList: {
        collection: "Profiles",
        via: 'Events',
    },

    groupList: {
        collection: 'Group',
        via: "eventRelatedTo"
    },

    taskList: {
        collection: 'task',
        via: 'eventRelatedTo'
    },

    issueList: {
        collection: 'Issues',
        via: 'eventRelatedTo'
    },
}
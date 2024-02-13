// 
// groups.js : model for which attribute to store in db
// 

module.exports = {

    groupName: {
        type: 'string',
        maxLength: 120,
        required: true,
    },

    groupLead: {
        model: 'Profile',
    },

    groupDescription: {
        type: 'text',
    },

    groupMemberList: {
        collection: 'Profile',
        via: 'groups',
    },

    eventRelatedTo: {
        model: 'Event' 
    },

    taskList: {
        collection: 'Task',
        via: 'groupRelatedTo'
    }
};


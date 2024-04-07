// 
// groups.js : model for which attribute to store in db
// 

module.exports = {
    attributes : {
        id: { type: 'string', columnName: '_id' },
        groupName: { type: 'string', maxLength: 120, required: true, },
        groupLead: { model: 'Profile', },
        groupDescription: { type: 'string', },
        groupMemberList: { collection: 'Profile', via: 'groups', },
        eventRelatedTo: { model: 'Event' },
        taskList: { collection: 'Task', via: 'groupRelatedTo'}
    }
};


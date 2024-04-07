// 
//  profiles.js : model for which attributes to store on db
// 
module.exports = {

    attributes: {
        id: { type: 'string', columnName: '_id' },
        fullName: { type: 'string', required: true, description: 'full name', maxLength: 120, },
        emailAddress: { type: 'string', required: true, unique: true, isEmail: true, maxLength: 120, },
        password: { type: 'string', required: true, protect: true, },
        phoneNumber: { type: 'number', },
        role: { type: 'string', isIn: ['user', 'admin', 'owner'], defaultsTo: 'user', },
        avatar: { type: 'json',
            defaultsTo: {
                publicId: '',
                url: ''
            }
        },
        // for events created by me
        eventLeadList: { collection: 'Event', },
        // events i am part of
        events: { model: 'Event', },
        // for task assigned to me
        tasks: { collection: 'Task', via: 'taskAssignedTo' },
        // tasks created by me
        createdTasks: {  collection: 'Task', via: 'taskCreatedBy'  },
        // issue raised by me
        issuesRaised: { collection: 'Issue', },
        // groups i am member of 
        groups: { model: 'Group', },
        // groups i am lead of
        groupLeadList: { collection: 'Group', },
        commentList: { collection: 'Comment', via: 'commentedBy' }
    }

}
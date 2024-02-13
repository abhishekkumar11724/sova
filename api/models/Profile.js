// 
//  profiles.js : model for which attributes to store on db
// 
module.exports = {


    attributes: {

        fullName: {
            type: 'string',
            required: true,
            description: 'full name',
            maxLength: 120,
        },

        emailAddress: {
            type: 'string',
            required: true,
            unique: true,
            isEmail: true,
            maxLength: 120,
        },

        password: {
            type: 'string',
            required: true,
            protect: true,
        },

        avatar: {
            type: 'json',
            defaultsTo: {
                publicId: '',
                url: ''
            }
        },

        phoneNumber: {
            type: 'number',
            maxLength: 10,
            minLength: 10,
        },

        role: {
            type: 'string',
            isIn: ['user', 'admin', 'owner'],
            defaultsTo: 'user',
        },


        // for events created by me
        eventLeadList: {
            collection: 'Event',
            via: 'eventOrganizer',
        },

        // events i am part of
        events: {
            model: 'Event',
        },
        
        // for task assigned to me
        tasks: {
            collection: 'Task',
            via: 'taskAssignedTo'
        },

        // tasks created by me
        createdTasks: { 
            collection: 'Task',
            via: 'taskCreatedBy' 
        },

        // issue raised by me
        issuesRaised: {
            collection: 'Issue',
            via: 'issueRaisedBy'
        },

        // groups i am member of 
        groups: {
            model: 'Group',
        },

        // groups i am lead of
        groupLeadList: {
            collection: 'Group',
            via: 'groupLead'
        },

        commentList: {
            collection: 'Comment',
            via: 'commentedBy'
        }
    }

}
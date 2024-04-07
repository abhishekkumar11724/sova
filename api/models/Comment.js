

module.exports = {

    attributes: {
        id: { type: 'string', columnName: '_id' },
        text: { type: 'string', required: true },
        taskRelatedTo: { model: "Task", required: true, },
        commentedBy: { model: 'Profile'},
    }
}
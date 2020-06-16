"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    taskId: {
        type: String,
        required: true
    },
    listId: {
        type: String,
        required: true
    },
    type: String,
    typeLetter: String,
    description: String,
    state: String,
    priority: Number,
    created: Date,
    updated: Date,
    assignee: String,
    title: {
        type: String,
        required: true
    },
});
exports.UserModel = mongoose_1.model('tasks', TaskSchema);
//# sourceMappingURL=TasksSchema.js.map
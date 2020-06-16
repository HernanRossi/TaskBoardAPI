"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(props) {
        if (!props.listId || !props.title)
            throw new Error('Task must have listIndex and title.');
        this.listId = props.listId;
        this.taskId = props.taskId;
        this.title = props.title;
        this.type = props.type || 'Task';
        this.typeLetter = props.type ? props.type[0] : 'T';
        this.description = props.description || '';
        this.priority = props.priority || 4;
        this.state = 'Created';
        this.created = props.created || new Date();
    }
    toJson() {
        return {
            listId: this.listId,
            title: this.title,
            taskId: this.taskId,
            type: this.type,
            typeLetter: this.typeLetter,
            description: this.description,
            priority: this.priority,
            state: this.state,
            created: this.created,
        };
    }
}
exports.Task = Task;
//# sourceMappingURL=TaskClass.js.map
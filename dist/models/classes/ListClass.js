"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List {
    constructor(props) {
        if (!props.listId)
            throw new Error('List must have listId.');
        this.listId = props.listId;
        this.tasks = props.tasks;
        this.title = props.title;
    }
}
exports.List = List;
//# sourceMappingURL=ListClass.js.map
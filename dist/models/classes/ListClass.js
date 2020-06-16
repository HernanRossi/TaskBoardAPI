"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List {
    constructor(props) {
        if (!props.listId)
            throw new Error('List must have listId.');
        this.sessionId = props.sessionId;
        this.listId = props.listId;
        this.boardId = props.boardId;
        this.title = props.title;
        this.listIndex = props.listIndex;
    }
    toJSON() {
        return {
            sessionId: this.sessionId,
            listId: this.listId,
            boardId: this.boardId,
            title: this.title,
            listIndex: this.listIndex
        };
    }
}
exports.List = List;
//# sourceMappingURL=ListClass.js.map
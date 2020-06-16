"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor(props) {
        if (!props.boardId)
            throw new Error('Board must have boardId.');
        this.userId = props.userId;
        this.boardId = props.boardId;
        this.title = props.title || 'Default Task Board';
        this.lists = props.lists;
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const BoardSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true
    },
    boardId: {
        type: String,
        required: true
    },
    title: String,
});
exports.UserModel = mongoose_1.model('boards', BoardSchema);
//# sourceMappingURL=BoardSchema.js.map
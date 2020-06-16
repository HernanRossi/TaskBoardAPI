"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const ListSchema = new mongoose_1.Schema({
    listId: {
        type: String,
        required: true
    },
    listIndex: Number,
    title: {
        type: String,
        required: true
    },
    tasks: {
        type: Array,
        required: true
    },
});
exports.UserModel = mongoose_1.model('lists', ListSchema);
//# sourceMappingURL=ListSchema.js.map
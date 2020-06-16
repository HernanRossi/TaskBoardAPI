"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModel = exports.Tasks = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
let Tasks = class Tasks {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Tasks.prototype, "taskId", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Tasks.prototype, "listId", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Tasks.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Tasks.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Tasks.prototype, "state", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Tasks.prototype, "priority", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Date)
], Tasks.prototype, "created", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Date)
], Tasks.prototype, "updated", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Tasks.prototype, "title", void 0);
Tasks = __decorate([
    type_graphql_1.ObjectType({ description: "The Tasks model" })
], Tasks);
exports.Tasks = Tasks;
exports.TasksModel = typegoose_1.getModelForClass(Tasks);
//# sourceMappingURL=Tasks.js.map
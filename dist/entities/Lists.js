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
exports.ListsModel = exports.Lists = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
let Lists = class Lists {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Lists.prototype, "listId", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Lists.prototype, "boardId", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", String)
], Lists.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Lists.prototype, "listIndex", void 0);
Lists = __decorate([
    type_graphql_1.ObjectType({ description: "The Lists model" })
], Lists);
exports.Lists = Lists;
exports.ListsModel = typegoose_1.getModelForClass(Lists);
//# sourceMappingURL=Lists.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const utils_1 = require("./utils");
const lists_1 = require("./resolvers/lists");
const tasks_1 = require("./resolvers/tasks");
const boards_1 = require("./resolvers/boards");
const session_1 = require("./resolvers/session");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [session_1.SessionResolver, lists_1.ListsResolver, tasks_1.TasksResolver, boards_1.BoardsResolver],
        emitSchemaFile: true,
        validate: false,
    });
    yield utils_1.getMongoConnection();
    const server = new apollo_server_express_1.ApolloServer({ schema });
    const app = express_1.default();
    server.applyMiddleware({ app });
    app.listen({ port: 8080 }, () => console.log(`Server ready and listening at ==> http://localhost:8080${server.graphqlPath}`));
    utils_1.logger.info({ message: `Server ready and listening at ==> http://localhost:8080${server.graphqlPath}` });
});
main().catch((error) => {
    console.log(error, 'error');
    utils_1.logger.info({ message: `Server Error!`, error: error.message, stack: error.stack });
});
//# sourceMappingURL=server.js.map
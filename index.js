"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3002;
const app = (0, express_1.default)();
app.get('/baz-hello', (_, res) => {
    res.send('Hello from Baz!');
});
app.listen(PORT, () => {
    console.log('Baz listening on 3002');
});

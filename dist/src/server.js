"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const port = 3000;
App_1.app.listen(port, () => {
    console.log(`API sucessfully started at port ${port}`);
});

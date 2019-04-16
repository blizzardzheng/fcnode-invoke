"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloworld_1 = require("./helloworld");
const fc_helper_connect_1 = require("fc-helper-connect");
fc_helper_connect_1.default({
    async getHelloWorld(input) {
        await helloworld_1.default();
        return Object.assign({}, input, { a: 234234 });
    }
})(exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLHlEQUF3QztBQUV4QywyQkFBTyxDQUFDO0lBQ04sS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLO1FBQ3ZCLE1BQU0sb0JBQVUsRUFBRSxDQUFDO1FBQ25CLHlCQUNLLEtBQUssSUFDUixDQUFDLEVBQUUsTUFBTSxJQUNWO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQSJ9
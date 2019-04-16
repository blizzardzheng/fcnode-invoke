"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delay(counts) {
    return new Promise((resolve) => {
        setTimeout(resolve, counts);
    });
}
async function helloworld() {
    await delay(1000);
    return process.env.HELLO_WORLD + 'hello world';
}
exports.default = helloworld;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVsbG93b3JsZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVMsS0FBSyxDQUFDLE1BQU07SUFDbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQzdCLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsS0FBSyxVQUFVLFVBQVU7SUFDdkIsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEIsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7QUFDakQsQ0FBQztBQUVELGtCQUFlLFVBQVUsQ0FBQyJ9
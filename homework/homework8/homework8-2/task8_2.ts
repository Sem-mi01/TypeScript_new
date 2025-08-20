// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
//
//     Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
type FunctionCloneObj = { functionClone: Function, key: string}

function cloner<T>(obj: T): T {
    if (obj) {
        const functions: Array<FunctionCloneObj> = []

        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneObj: T = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            (cloneObj as any)[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('ERROR');

}
const clone = cloner({
    id: 123, name: 'asdsad', greeting() {
        console.log('hello')
    }, foo() {
        console.log('bar')
    }
});
clone.greeting();
clone.foo();

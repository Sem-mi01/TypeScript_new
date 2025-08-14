// #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

// @ts-ignore
const array: number = [10,8,-7,55,987,-1011,0,1050,0];
// @ts-ignore
const strings: string = array.map(number => {
    return number + '';
});
console.log(strings);

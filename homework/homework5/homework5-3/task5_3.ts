// #Mbiz5K4yFe7
//
// – створити стрілочну функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r



// @ts-ignore
const cylinderSquare = (h: number, r: number): number => {
    return (2 * Math.PI * r * h)+(2 * Math.PI * r * r);
}
console.log(cylinderSquare(15, 10));
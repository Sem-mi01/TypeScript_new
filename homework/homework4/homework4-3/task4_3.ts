// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderSquare (hNum: number, rNum: number): number {
        const sideSquare = 2 * Math.PI * rNum * hNum;
        const roudSquare = 2 * Math.PI * rNum * rNum;
        const result = sideSquare + roudSquare;
        console.log(result);
        return result;
}
    let hNum = 15
    let rNum = 10

cylinderSquare (hNum, rNum)


// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

// @ts-ignore
const cardSuits:string[] = ['spade', 'diamond','heart', 'clubs'];
// @ts-ignore
const values: string [] = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

type Card = {cardSuit: string, value: string, color?: string};
// @ts-ignore
const cards: Card[] = [];
for (const cardSuit of cardSuits ) {
    for (const value of values) {
        const card: Card = {cardSuit: cardSuit, value: value};
        if (cardSuit === 'diamond' || cardSuit === 'heart') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}

console.log(cards);

console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'clubs'  && (card.value !== '6'  &&  card.value !== '7'  &&  card.value !== '8'  &&  card.value !== '9')));
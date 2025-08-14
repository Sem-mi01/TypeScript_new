// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту

// @ts-ignore
const cardSuits: string[] = ['spade', 'diamond','heart', 'club'];
// @ts-ignore
const values: string [] = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];



// @ts-ignore
const cards: Card[] = [];
for (const cardSuit of cardSuits ) {
    for (const value of values) {
        // @ts-ignore
        const card: Card = {cardSuit: cardSuit, value: value };
        if (cardSuit === 'diamond' || cardSuit === 'heart') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

interface Accumulator {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];

}

// @ts-ignore
const reduse = cards.reduce((accumulator: Accumulator, card) => {
    switch (card.cardSuit) {
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'club':
            accumulator.clubs.push(card);
            break;
        case 'spade':
            accumulator.spades.push(card);
            break;
    }
    return accumulator;
    }, {
    diamonds: [],
    hearts: [],
    spades: [],
    clubs: [],
});
console.log(reduse);


// #0Kxco1edSN
//
// – створити cтрілочну функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write



// @ts-ignore
const listText = (text: string, number: number): void => {
    document.write('<ul>');
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
     document.write('</ul>');
}
listText('lorem ipsum', 10);

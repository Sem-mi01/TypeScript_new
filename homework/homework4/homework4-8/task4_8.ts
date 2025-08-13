
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

type Primitive = boolean | number | string

function primElements(arrayElements: Primitive[]): void {
    document.write('<ul>');
    for (const element of arrayElements) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}
primElements ([2, 17, 386, 'hello', 'world', true]);
// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function madeParagraph (text: string): void {
    document.write(`<p>${text}</p>`);
}

madeParagraph('lorem  ipsum');


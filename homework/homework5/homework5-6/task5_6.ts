
// #hOL6126
//
// – створити cтрілочну функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий



// @ts-ignore
const foobar = (text: string): void => {document.write
                   (`<ul><li>${text}</li>
                        <li>${text}</li>
                         <li>${text}</li>
                        </ul>`);};
foobar('test');
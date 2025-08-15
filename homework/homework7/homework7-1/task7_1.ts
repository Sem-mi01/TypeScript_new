// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

// @ts-ignore
class User7 {

    constructor(
        private _id: number, private _name: string, private _surname: string, private _email: string, private _phone: string) {
    }
    get id(): number {
        return this._id;
    }


    set id(value: number) {
        this._id = value;
    }
}
// @ts-ignore
let user7 = new User7(1, 'asd', 'asd', 'asd');
console.log(user7.id);
user7.id = 123


// @ts-ignore
let users: User7[] = [
    new User7(4, 'Roman', 'Ivanenko', 'Ivanenko@gmail.com', '5674531'),
    new User7(9,  'Katerina',  'Pruhodko', 'Pruhodko@gmail.com',  '5674532'),
    new User7(3,  'Polina',  'Gnatenko',  'Gnatenko@gmail.com',  '5674533'),
    new User7(1,  'Olersandr',  'Petrenko',  'Petrenko@gmail.com', '5674534'),
    new User7(10,  'Volodumur', 'Kovalenko',  'Kovalenko@gmail.com', '5674535'),
    new User7(6,  'Anna',  'Mukutenko',  'Mukutenko@gmail.com',  '5674536'),
    new User7(7,  'Dmutro',  'Avramenko', 'Avramenko@gmail.com',  '5674537'),
    new User7(8,  'Oksana',  'Kostenko',  'Kostenko@gmail.com',  '5674538'),
    new User7(2,  'Svitlana',  'Stepanenko',  'Stepanenko@gmail.com', '5674539'),
    new User7(5,  'Bogdan', 'Magdenko', 'Magdenko@gmail.com',  '56745310'),
    ]
console.log(users);

// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client

// @ts-ignore
class Product {
    title: string;
    price: number;


    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}
// @ts-ignore
class Client{
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    products: Product[]


    constructor(id: number, name: string, surname: string, email: string, phone: string, products: Product[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.products = products;
    }
}

const client = new Client(
    1,
    'Roman',
    'Ivanenko',
    'Ivanenko@gmail.com',
    '5674531',
    [new Product('tv',23000),
    new Product('phone', 12000)]
);
// @ts-ignore
let clients = [
    new Client(1, 'Roman', 'Ivanenko', 'Ivanenko@gmail.com', '5674531',[{title: 'tv', price: 23000}, {title: 'phone', price: 12000}]),
    new Client(2,  'Katerina',  'Pruhodko', 'Pruhodko@gmail.com',  '5674532', [{title: 'PlayStation', price: 25000}, {title: 'headphone', price: 2900}]),
    new Client(3,  'Polina',  'Gnatenko',  'Gnatenko@gmail.com',  '5674533', [{title: 'mattress', price: 30000}, {title: 'clothes', price: 500}]),
    new Client(4,  'Olersandr',  'Petrenko',  'Petrenko@gmail.com', '5674534', [{title: 'refrigerator', price: 27000}, {title: 'vacuum cleaner', price: 10000}]),
    new Client(5,  'Volodumur', 'Kovalenko',  'Kovalenko@gmail.com', '5674535', [{title: 'trimmer', price: 3500}, {title: 'irrigator', price: 6800}]),
    new Client(6,  'Anna',  'Mukutenko',  'Mukutenko@gmail.com',  '5674536', [{title: 'coffee maker', price: 1400}, {title: 'kittle', price: 1000}]),
    new Client(7,  'Dmutro',  'Avramenko', 'Avramenko@gmail.com',  '5674537', [{title:
            'toaster', price: 1800}, {title: 'multi-oven', price: 5000}]),
    new Client(8,  'Oksana',  'Kostenko',  'Kostenko@gmail.com',  '5674538', [{title:
            'bag', price: 3000}, {title: 'dress', price: 2500}]),
    new Client(9,  'Svitlana',  'Stepanenko',  'Stepanenko@gmail.com', '5674539', [{title: 'sneakers', price: 2300}, {title: 'shoes', price: 3500}]),
    new Client(10,  'Bogdan', 'Magdenko', 'Magdenko@gmail.com',  '56745310', [{title:
            'swimming pool', price: 6000}, {title: 'fireplace', price: 15000}]),
];
console.log(client.products);

const sortedProducts = clients.sort((a, b) => a.products.length - b.products.length);
console.log(sortedProducts);



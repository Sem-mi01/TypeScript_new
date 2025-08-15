

// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


let users73: UserClass[] = [
    new UserClass(4, 'Roman', 'Ivanenko', 'Ivanenko@gmail.com', '5674531'),
    new UserClass(9,  'Katerina',  'Pruhodko', 'Pruhodko@gmail.com',  '5674532'),
    new UserClass(3,  'Polina',  'Gnatenko',  'Gnatenko@gmail.com',  '5674533'),
    new UserClass(1,  'Olersandr',  'Petrenko',  'Petrenko@gmail.com', '5674534'),
    new UserClass(10,  'Volodumur', 'Kovalenko',  'Kovalenko@gmail.com', '5674535'),
    new UserClass(6,  'Anna',  'Mukutenko',  'Mukutenko@gmail.com',  '5674536'),
    new UserClass(7,  'Dmutro',  'Avramenko', 'Avramenko@gmail.com',  '5674537'),
    new UserClass(8,  'Oksana',  'Kostenko',  'Kostenko@gmail.com',  '5674538'),
    new UserClass(2,  'Svitlana',  'Stepanenko',  'Stepanenko@gmail.com', '5674539'),
    new UserClass(5,  'Bogdan', 'Magdenko', 'Magdenko@gmail.com',  '56745310'),
]

// @ts-ignore
console.log(users.sort((user1: UserClass, user2: UserClass)=> user1.id - user2.id));

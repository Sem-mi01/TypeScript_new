// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

// @ts-ignore
type Car = {
    model: string;
    producer: string;
    year: number;
    maxSpeed: number;
    engineVolume: number;
    driver?: any;
    drive(): void;
    info(): void;
    increaseMaxSpeed(speedToAdd: number): void;
    changeYear(year: number): void;
    addDriver(driver: any): void;
};

function createCar(model: string, producer: string, year: number, maxSpeed: number, engineVolume: number): Car {
    return {
        model, producer, year, maxSpeed, engineVolume,
        drive() {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
        },
        info() {
            for (const key in this)
                console.log(key, (this as any)[key]);
        },
        increaseMaxSpeed(s: number) {
            if (s > 0) this.maxSpeed += s;
        },
        changeYear(y: number) {
            if (y > 1815) this.year = y;
        },
        addDriver(d: any) {
            if (d) this.driver = d;
        },
    };
}


// @ts-ignore
const car = createCar('asd', 'qwe', 1234, 122, 4);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({});
console.log(car);

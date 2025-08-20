// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)



const sort = clients.sort((a, b) => {
    return a.products.length - b.products.length
});
console.log(sort);



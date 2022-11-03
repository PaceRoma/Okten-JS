// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let friend1 = {name: 'Jameson', age: 28}
let friend2 = {name: 'Fin', age: 18}
let friend3 = {name: 'Alex', age: 32}
let friend4 = {name: 'Olga', age: 21}
let friend5 = {name: 'Viktor', age: 33}
let arr = [
    friend1,
    friend2,
    friend3,
    friend4,
    friend5,
]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: 'The Book',
    pageCount: 27,
    genre: 'History'
}
console.log(book);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book2 = {
    title: 'The Big Book',
    pageCount: 227,
    genre: 'Criminal',
    authors: [
        {name: 'Victor', age: 32},
        {name: 'Olga', age: 26},
    ]
}
console.log(book2.authors[1]);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user1 = {
    name: 'vasya',
    username: 'anonymus',
    password: '12345'
}
let user2 = {
    name: 'oleg',
    username: 'oleg35',
    password: 'rgtu42f'
}
let user3 = {
    name: 'misha',
    username: 'mishanya31',
    password: '5g54fdw3'
}
let user4 = {
    name: 'olga',
    username: 'olychka123',
    password: 'parol'
}
let user5 = {
    name: 'dima',
    username: 'dimon',
    password: '55555'
}
let users = [
    user1,
    user2,
    user3,
    user4,
    user5
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
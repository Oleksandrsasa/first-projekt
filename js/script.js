"use strict";

const number0fFilms = +prompt('Скільки Фільмів ви вже подивились?');

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один із останніх фільмів який ви подивились?', ''),
    b = prompt('наскільки ви цінуєте його?', ''),
    c = prompt('один із останніх фільмів який ви подивились?', ''),
    d = prompt('наскільки ви цінуєте його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);


// const  + promt питання це переменная
// якщо +promt то це вже число

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 + 2 * 2 !== '6');



// const isChecked = false,
//     isClose = false;

// console.log(isChecked || !isClose);
// alert('Hello');
// const result = confirm("як справи?");
// console.log(result);
// const answer = +prompt("Ви курите?", "ні")
// console.log(answer + 5);

// const obj = {
//     name: "john",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.age) то буде 25
// const answers = [];

//  answers[0] = prompt('як тебе звати?', '');
//  answers[1] = prompt('як тебе по батьково?', '');
//  answers[2] = prompt('скольки в тебе свиней?', '');

// console.log(typeof (answers));
// console.log(typeof (null));

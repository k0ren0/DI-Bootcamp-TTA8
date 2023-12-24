// if (4+3 === 7) {
//     alert("hello, you need to drink");
// }

// let x = 1;
// console.log(x++);
// // console.log(++x);


// console.log('Is 5 = 5', 5 == 5);
// console.log('Is 5 = "5"', 5 === "5");
// console.log('Is 5 = "4"', 5 == 4);

// Оператор switch
// let status = "respond";
// switch (status) {
//     case 'idle': {
//         console.log('Nothing is happening');
//         break;
//     }  
//     case 'loading': {
//         console.log('Data is loading');
//         break;
//     }
//     case 'respond': {
//         console.log('We have data'); 
//         break;
//     }
//     case 'error': {
//         console.log('Something went wrong');
//         break;
//     }
//     default: {
//         console.log('Error');
//     }

// }


// // Тернарный оператор (выражение)
// const age = 15;
// // age ›= 18 ? console.log('Access granted') : console.log('Access denied');
// console. log('Access ', age >= 18 ? 'granted' : 'denied');
// let status = 'idle';

// let statusNumber = status === 'idle' ? 0 : 1;
// console.log({statusNumber});

// // Задача

// const a = 1;
// const b = 2;
// let result;

// result = (a + b < 4) ? "Мало" : "Много";
// console.log({result});

const spainCapital = 'Valencia';
let isCorrectAnswer;

switch (spainCapital) {
    case 'Madrid':
    case 'madrid':
    case 'MADRID':
        isCorrectAnswer = true;
        console.log("true");
        break;
    default:
        isCorrectAnswer = false;
        console.log("false");
}

//  или вот так

switch (spainCapital.toLowerCase()) {
    case "madrid":
        isCorrectAnswer = true;
        console.log("true");
        break;
    default:
        isCorrectAnswer = false;
        console.log("false");
}


// // или сразу без рассчета

// const a = 1;
// const b = 2;
// let result = (a + b < 4) ? "Мало" : "Много";
// console.log({ result });


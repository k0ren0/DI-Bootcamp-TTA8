function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
    const sortCleanStr1 = cleanStr1.split('').sort().join('');
    const sortCleanStr2 = cleanStr2.split('').sort().join('');
    return sortCleanStr1 === sortCleanStr2;
}

// // // OR short variant

// function areAnagrams(str1, str2) {
//     const clean = str => str.replace(/\s/g, '').toLowerCase();
//     return clean(str1).split('').sort().join('') === clean(str2).split('').sort().join('');
// }


// Examples
const result1 = areAnagrams("Astronomer", "Moon starer");
console.log(result1);

const result2 = areAnagrams("School master", "The classroom");
console.log(result2);

const result3 = areAnagrams("The Morse Code", "Here come dots");
console.log(result3);

const result4 = areAnagrams("Python", "JavaScript");
console.log(result4); 

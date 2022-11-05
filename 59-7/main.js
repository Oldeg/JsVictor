//1.
const repeatString = (a, b, c) => {
    let str = '';
    for (let i = 1; i <= b; i++) {
        str = str + a + c
    }
    return str
}

console.log(repeatString('yo', 3, ' '))

//2.
const checkStart = (a, b) => {
    return a.slice(0, b.length).toLowerCase() === b.toLowerCase()
}
console.log(checkStart('Incubator', 'Inc'))

//3.
const truncateString = (a, b) => {
    return a.slice(0, b) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4.
const getMinLengthWord = (a) => {
    if (a.length > 0 && typeof a === "string") {
        let str = a.split(' ')
        let res = str[0];
        str.map(el => el.length < res.length ? res = el : '')
        return res
    }
    return null

}
console.log(getMinLengthWord('AAA JN OKDWODJWIJDPDM'))

//5.
const setUpperCase = (a) =>  a.toLowerCase().split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

//6.
const isIncludes = (a, b) => {
    let str = a.toLowerCase()
    let str2 = b.toLowerCase()
    let counter = 0;
    for (let i = 0; i <= str2.length; i++) {
        if (str.indexOf(str2[i]) >= 0) {
            counter++
        }
    }
    return counter === b.length
}
console.log(isIncludes("Incubator", "Cut"))
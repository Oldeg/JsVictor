const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // friends: ["Alex", "Nick", "John", .......]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}
//1.
let copyUser = {...user}
/*
console.log(copyUser === user)
console.log(copyUser.friends === user.friends)*/

//2.
let deepCopyUser = {...user, friends: [...user.friends]}
/*console.log(deepCopyUser === user)
console.log(deepCopyUser.friends === user.friends)*/

//3.
let copyStudents = [...students];

/*console.log(copyStudents === students)
console.log(copyStudents[0] === students[0])
console.log(copyStudents[1] === students[1])
console.log(copyStudents[2] === students[2])
console.log(copyStudents[3] === students[3])*/


//4.
/*let deepCopyStudents = students.map(st => ({...st}) )
console.log(deepCopyStudents === students )
console.log(deepCopyStudents[0] === students[0])
console.log(deepCopyStudents[1] === students[1])
console.log(deepCopyStudents[2] === students[2])
console.log(deepCopyStudents[3] === students[3])*/

//5.
/*const sort = [...deepCopyStudents].sort((a,b) => a.name.localeCompare(b.name))
console.log(sort)*/

//5a.
/*const sort1 = deepCopyStudents.sort((a,b) => a.scores - b.scores )
console.log(sort1)*/

//6.
/*
let  bestStudents = students.filter(el => el.scores >= 100)
console.log(bestStudents)*/
//6a.
/*deepCopyStudents = students.map(st => ({...st}) )
const sort = deepCopyStudents.sort((a,b) => a.scores < b.scores ? 1 : -1)
let topStudents = sort.splice(0, 3)
console.log(topStudents)
console.log(sort)*/
//6b.
/*let newDeepCopyStudents = [...topStudents, ...sort]
console.log(newDeepCopyStudents)*/

//7.
/*let notMarriedStudents = students.filter(el => !el.isMarried )
console.log(notMarriedStudents)*/

//8.
/*let studentsNames = students.map(el => el.name)*/
/*console.log(studentsNames)*/

//8a.
/*let str1 = studentsNames.join(' ')
let str2 = studentsNames.join(',')
console.log(str1)
console.log(str2)*/

//9.
/*let trueStudents = students.map(el =>  ({...el , isStudent : true }))
console.log(trueStudents)*/

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
/*let studentsWithMarriedNick = students.map(el => el.name === 'Nick' ?  {...el, isMarried: true}: el)
console.log(studentsWithMarriedNick)*/

//11. Найдите студента по имени Ann (find)
/*let deepCopyStudents = students.map(st => ({...st}) )
let ann = deepCopyStudents.find(el => el.name === 'Ann')
console.log(ann)*/

//12.

/*let bestStudent;
console.log(bestStudent)*/


//15.
/*const getBestStudents2 = (students, num = 1) =>
    new Array(num).fill(null).map((s, i) => i < students.length ? students[i] : s);*/





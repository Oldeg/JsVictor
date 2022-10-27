const todoListId_1 = "1"
const todoListId_2 = "2"
const getObjectKey = (n) => n * 2
const todoLists = [
    {
        id: todoListId_1, // "1"
        title: "What to learn",
        filter: "all",
    },
    {
        id: todoListId_2, //"2"
        title: "What to buy",
        filter: "all",
    }
]

const tasks = {
    [todoListId_1]: [ //"1"
        {id: "11", title: "HTML", isDone: true},
        {id: "12", title: "CSS", isDone: true},
        {id: "13", title: "JS/TS", isDone: true},
    ],
    [todoListId_2]: [ //"2"
        {id: "21", title: "Beer", isDone: true},
        {id: "22", title: "Fish", isDone: true},
        {id: "23", title: "Cheese", isDone: true},
    ],
    [10+20]: [], //"30"
    [todoListId_1 + todoListId_2]: [], //
    [getObjectKey(33)]: [], // "66"
    ["user name"]: "Bob"
}

const obj = {
    "1": "Bob",
    "2": "Alex",
    "3": "Nick",
    "3": "Helga",
}

console.log([...tasks[todoListId_1],  {id: "14", title: "REDUX", isDone: true}])
console.log(tasks[todoListId_2].find(t => t.id === "21"))
console.log(obj[1])
console.log(obj["1"])
console.log(tasks[todoListId_1][2]["title"])
console.log(obj)
console.log(tasks[todoLists[1]["id"]][0].title) //todoLists[1]["id"] => "2'

//C => [...], concat, push
//R => map, filter, sort, find
//U => map
//D => filter

//reduce

const numbers = [1,2,3,4,5]
console.log(numbers.reduce((acc, el) => acc + el, 0))

//acc = 0, el = 1 => 1
//acc = 1, el = 2 => 3
//acc = 3, el = 3 => 6
//acc = 6, el = 4 => 10
//acc = 10, el = 5 => 15
// => 15

console.log(numbers.reduce((acc, el) => acc > el ? acc : el))
// => 5

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 25,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el)=> acc.scores > el.scores ? acc : el).scores)

console.log(students.reduce((acc, el) => {
    const updatedStudent = {...el, scores: el.scores + 10}
    acc.push(updatedStudent)
    return acc
}, []))

console.log(students.reduce((acc, el)=>{
    if(el.scores >= 100){
        acc.push(el)
    }
    return acc
}, []))

const sts = {
    "Bob": {
        age: 22,
        isMarried: true,
        scores: 85
    },
    "Alex": {
        age: 21,
        isMarried: true,
        scores: 89
    }
}

console.log(students.reduce((acc, el) => {
    acc[el.name] = {...el}
    delete acc[el.name].name 
    return acc
}, {}))


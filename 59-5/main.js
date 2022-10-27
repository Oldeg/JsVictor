const names = ['Donald', 'Alex', 'Bob']
console.log(names.sort())
// 1. Сортирует строки по умолчанию
// 2. Сортирует по таблице юникодов(сортировка по алфавиту частный случай, в таблице идёт всё по алфавиту)
// 3. Работает мутабельно
// 4. Возвращает ссылку на исходный массив
// 5. Часто используется совместно с reverse

const nums = [12, 48, 54, 14, 1, 99, 52, 74, 3]
for (let j = 0; j< nums.length - 1; j++){
    let isSorted = true
    for(let i = 0; i < nums.length - 1 - j; i++){
        if(nums[i]>nums[i+1]){
            isSorted = false;
            /*let temp = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = temp*/
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
        }
    }
    if(isSorted) break;
}

console.log(nums)
const arr = [1, 3, 4, 5, 8, 9]

const newArray = arr.map(function(item, index) {
    return item + index
})

console.log('newArray', newArray)

// reduce get all vector and turns it into a single variable
const sum = arr.reduce(function(total, next) {
    return total + next
})

console.log('sum', sum)

const filter = arr.filter(function(item){
    return item % 2 === 0
})

console.log('filter', filter)

// checks if info exists in array
const find = arr.find(function(item) {
    return item === 4
})

console.log('find', find)
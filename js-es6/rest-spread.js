// REST
// guarda o restante das props

const user = {
    name: 'Vitoria',
    idade: 20,
}

const { name, ...other } = user

console.log('name', name)
console.log('other info', other)

// SPREAD
// propaga as info pra outro array

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [ ...arr1, ...arr2]

const user1 = {
    name: 'Vitoria',
    idade: 20,
}

const user2 = { ...user1, name: 'Maria'}

console.log('user2', user2)
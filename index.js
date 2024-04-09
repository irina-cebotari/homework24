// ex1

// function showProp(key) {
//     return this[key] 
// }

// const obj1 = {
//     name: 'Irina',
//     func: showProp
// }

// const obj2 = {
//     name: 'Ina',
//     func: showProp
// }

// console.log(obj1.func.call(obj2, 'name'))
// console.log(obj1.func.apply(obj2, ['name']))

// const boundFunc = showProp.bind(obj2)

// console.log(boundFunc('name'))



// ex2

// const obj = {
//     name: 'Irina'
// }

// Object.defineProperties(obj, {
//     age: {
//         value: 23,
//         writable: false,
//         enumerable: true,
//         configurable: true
//     },
//     city: {
//         value: 'Chisinau',
//         writable: true,
//         enumerable: false,
//         configurable: true
//     },
//     job: {
//         value: 'devops',
//         writable: true,
//         enumerable: true,
//         configurable: false
//     }
// })

// console.log(obj)
// obj.age = 23
// console.log(obj.city)

// Object.defineProperty(obj, 'job', {
//     configurable: true
// })



// ex3/4

// const obj = {
//     name: 'Irina'
// }

// Object.preventExtensions(obj)

// obj.age = 23

// console.log(obj, obj.age)


// Object.seal(obj)

// obj.age = 23

// Object.defineProperty(obj, 'name', {
//     enumerable: false
// })

// console.log(obj, obj.age)

// Object.seal(obj)

// obj.name = 'Ina'

// console.log(obj, obj.name)

// Object.freeze(obj)

// obj.name = 'Ina'

// console.log(obj)



// ex5

// const func = (arr, item) => {
//     return arr.reduce((acc, curr) => {
//         if(!acc) return acc;

//         return curr === item 

//     }, true)
// }

// const list = [1,2,3,4,5]
// const elem = 3

// console.log(func(list, elem))



// ex6

// const func = (arr, item) => {
//     return arr.reduce((acc, curr, index) => {
//         if(acc !== -1) return acc;

//         return curr === item ? index : -1

//     }, -1)
// }

// const list = [1,2,3,4,5]
// const elem = 3

// console.log(func(list, elem))



// ex7

// const func = (arr, item) => {
//     return arr.reduce((acc, curr) => {
//         if (curr === item) {
//             acc = [...acc, item]
//         };

//         return acc

//     }, [])
// }

// const list = [1, 2, 2, 3, 4, 5]
// const elem = 2

// console.log(func(list, elem))


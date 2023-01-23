import data from './data.json' // imports data.json

export default data // export the native JS array

// console.log(data[0])

const allCategories = data.map(obj => obj.category)

// const uniqueCategories = Array.from( new Set(allCategories) )

const cats = allCategories.reduce((acc, cat) => {
    acc[cat] = 0
    return acc
}, {})
const uniqueCategories = Object.keys(cats)

const categoriesAndCounts = allCategories.reduce((acc, cat) => {
    if (acc[cat] === undefined) {
        acc[cat] = 1
    } else {
        acc[cat] += 1
    }
    return acc
}, {})


const catsAndCounts = uniqueCategories.map(name => {
    return { name, count: categoriesAndCounts[name] }
})

catsAndCounts.push( {name: 'All', count: data.length} )

export {
    allCategories,
    uniqueCategories,
    categoriesAndCounts,
    catsAndCounts

}
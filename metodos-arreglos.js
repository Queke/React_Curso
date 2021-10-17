
const arr = [-5,-1,2,3,4]

//FILTER

//simepre devolverá los valores que es evalúan como true al resultado "el "
const r = arr.filter((el,i) => {
  //  console.log(i)
    return el > 2}) 
//console.log(r)

//MAP

const mapped = arr.map((el) => `<h1>${el}</h1>`)
//console.log(mapped)

const users = [
    { id: 1, name: 'Chanchito Feliz'},
    { id: 2, name: 'Chanchito Triste'},
    { id: 3, name: 'Chanchito Enojao'},
    { id: 4, name: 'Chanchito Emocionado'}

]

const mapped2 = users.map((users) => `<h1>${users.name}</h1>`)
//console.log(mapped2)


//REDUCE

//const r1 =arr.reduce((acc,el) => acc + el,0)
// const getMax = (a,b) => Math.max(a,b)
// const r1 =arr.reduce(getMax)
// const r1 = users.reduce((acc,el) => 
// `${acc === '' ? '' : `${acc},`}${el.name}`,'')

const r1 = users.reduce((acc,el) => 
{if(el.id < 2){
    return acc
}
return acc.concat(el)},[])
console.log(r1)
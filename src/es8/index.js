const data = {
    frontend: 'Juan',
    backend: 'Carlos',
    design: 'Ana'
}
const entries = Object.entries(data)
const key = Object.keys(data)
const values = Object.values(data)
console.log(entries)
console.log(key)
console.log(values);


/* Object Values: Obtener los valores de un objeto y ponerlos en un array */

const data = {
    frontend: 'santiago',
    backend: 'isabel',
    design: 'ana'
  }
  
  const values = Object.values(data)
  console.log(values)
  console.log(values.length)


  /* Modificación de strings */

const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, 'hi'))


/* Trailing commas */
const obj = {
    name: 'santiago',
  }
// fetch api in deno

const res = await fetch('https://swapi.dev/api/films/')
const data = await res.json()

console.log(data)
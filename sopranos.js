// fetch('https://sopranos-quote-and-clip-app.netlify.app/sopranos.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
let arr = []

let quote = document.getElementById('quote')
console.log(quote)
const fetchUsers = async () => {
  const response = await fetch(
    'https://sopranos-quote-and-clip-app.netlify.app/sopranos.json'
  )
  const users = await response.json()
  let qwerty = users.results
  let mapQuote = qwerty.map((each) => each.quote)
  let mapClip = qwerty.map((each) => each.clip_url)
  let singleQuote = mapQuote[Math.floor(Math.random() * mapQuote.length)]
  let singleClip = mapClip[Math.floor(Math.random() * mapClip.length)]

  let answer = [singleQuote, singleClip]
  return arr
}

const results = () => {
  fetchUsers.then((a) => {
    return a
  })
  let b = results()
  console.log({ b })
}

// fetch('https://sopranos-quote-and-clip-app.netlify.app/sopranos.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
let arr = []

let quote = document.getElementById('quote')
let video = document.getElementById('video')

console.log(video)
const fetchUsers = async () => {
  const response = await fetch(
    'https://sopranos-quote-and-clip-app.netlify.app/sopranos.json'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results)
      let mapVideo = data.results.map((each) => each.clip_url)
      let mapQuote = data.results.map((each) => each.quote)
      var randomVideo = mapVideo[Math.floor(Math.random() * mapVideo.length)]
      var randomQuote = mapQuote[Math.floor(Math.random() * mapQuote.length)]
      let video0 = randomVideo
      let quote0 = randomQuote
      console.log(mapVideo)
      video.innerHTML = ` <iframe
          class='embed-responsive-item'
          src='https://www.youtube.com/embed/${video0}'
          allowfullscreen
        ></iframe>`
      quote.innerHTML = `<h1>${quote0}</h1>`
    })

  let button = document.getElementById('bouton')
  button.addEventListener('click', fetchUsers)

  //   const users = await response.json()
  //   let qwerty = users.results
  //   let mapQuote = qwerty.map((each) => each.quote)
  //   let mapClip = qwerty.map((each) => each.clip_url)
  //   let singleQuote = mapQuote[Math.floor(Math.random() * mapQuote.length)]
  //   let singleClip = mapClip[Math.floor(Math.random() * mapClip.length)]

  //   let answer = [singleQuote, singleClip]
  //   return arr
  // }

  // const results = () => {
  //   fetchUsers.then((a) => {
  //     return a
  //   })
  //   let b = results()
  //   console.log({ b })
}
fetchUsers()

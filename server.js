if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const app = express()
const path = require("path")
const axios = require('axios')
let accessToken = {}

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

// GET THE BEARER TOKEN

bearerToken = async () => {
  if (accessToken.token !== undefined && (new Date() - accessToken.created_at) < accessToken.ttl) { return accessToken.token }
  console.log('Fetching new Token')
  await axios({
    method: 'POST',
    url: 'https://api.petfinder.com/v2/oauth2/token',
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      grant_type: "client_credentials",
      client_id: "2ayA433jhJnQKkKURk4TiZivKBEkCO6ec1QA6ySprXvsI3lwQd",
      client_secret: "1sstXrWDWnaFH61hwjV2J0qUjF3bKIF7HHh8ozfy"
    }
  }).then(response => response.data)
    .then(data => {
      accessToken.token = data.access_token
      accessToken.ttl = data.expires_in * 1000 // Convert seconds to ms
      accessToken.created_at = new Date()
    })
    .catch(e => console.log(e))
  // console.log('new Token ' + accessToken.token)
  return accessToken.token
}

app.get('/api/animals', async (request, response) => {


  const token = await bearerToken()

  try {
    const { data } = await axios.get('https://api.petfinder.com/v2/animals?type=dog', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: request.query
    });
    // console.log(data.animals)
    let animals = data.animals.map(animal => {
      return ({
        id: animal.id,
        breed: animal.breeds.primary,
        age: animal.age,
        gender: animal.gender,
        spayed_neutered: animal.attributes.spayed_neutered,
        house_trained: animal.attributes.house_trained,
        name: animal.name,
        email: animal.contact.email,
        phone: animal.contact.phone,
        street_address: animal.contact.address.address1,
        city: animal.contact.address.city,
        state: animal.contact.address.state,
        zip_code: animal.contact.address.zip_code,
        photo: animal.photos[0]
      })
    })
    response.send(animals);
  } catch (e) {
    console.log(e)
  }
})

app.get('/api/animals/:id', async (req, res) => {
  const token = await bearerToken()
  const { data } = await axios.get(`https://api.petfinder.com/v2/animals/${req.params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  let animal = {
    id: data.animal.id,
    type: data.animal.type,
    name: data.animal.name,
    breeds: data.animal.breeds,
    colors: data.animal.colors,
    age: data.animal.age,
    gender: data.animal.gender,
    coat: data.animal.coat,
    size: data.animal.size,
    description: data.animal.description,
    organization_id: data.animal.organization_id,
    status: data.animal.status,
    contact: data.animal.contact,
    published_at: data.animal.published_at
  }
  res.send(animal)
})

const port = process.env.PORT || 8080
app.listen(
  port,
  () => { console.log(`API listening on port ${port}...`) }
)

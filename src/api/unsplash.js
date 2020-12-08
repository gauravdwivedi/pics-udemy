import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID jIiS7SVn9vWQL9G4pErFBE5NXgspnDhkr_i8Q9SsbMQ'
    }
})
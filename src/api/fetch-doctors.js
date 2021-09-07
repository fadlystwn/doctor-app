import axios from 'axios';

const url = 'https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc';

async function fetchDoctors() {
    return await axios.get(url)
    .then( res => { 
        return res.data
    })
    .catch( err => { 
        console.log(err)
    })
    
}

export default fetchDoctors
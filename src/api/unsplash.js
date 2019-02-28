// code related to axios

import axios from 'axios';

export default axios.create({ // creates customized copy to make request to url w/ our headers
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6cb271424441f9a9620dd07e0f63ae15f4ea385ee4518aa07a7df3177ca389a2'
    }
})
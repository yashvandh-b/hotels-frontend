import axios from 'axios'

export const getJSON = (get_link) => {
    axios.get(get_link)
    .then(response => {
        //console.log(response)
        //console.log(response.data, "Api-calls")
        return response.data
    })
    .catch(error => {console.log(error)});
    return null
} 
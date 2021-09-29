import logo from '../logo-oscuro.png'
import axios from 'axios'

const isValidUrl = (url) => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
    const validUrl = regex.test(url)
    return validUrl
}

const BACK_SERVER =process.env.REACT_APP_BACK_SERVER || "http://localhost:3010"


export async function fetchData(url) {
  
    if (isValidUrl(url)) {
  
        try {
            const metadataApi = await axios.post(`${BACK_SERVER}/metadata`,{url:url})
            const data=metadataApi.data
        if(!data.img){
            data.img=logo
        }
        if(!data.title){
            data.title=""
        }
        if(!data.description){
            data.description=""
        }
        return (data)
 
        } catch (err) {
            throw err
        }

    }
    else {
        return {img:"",title:"",description:""}
    }
}

import logo from '../logo-oscuro.png'

const isValidUrl = (url) => {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
    const validUrl = regex.test(url)
    return validUrl
}

const api = 'https://lpdg.herokuapp.com/parse/link'


export async function fetchData(url) {
    const fetch = window.fetch
    if (isValidUrl(url)) {
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        })
        const data = await response.json()
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
    }
    else {
        return {img:"",title:"",description:""}
    }
}

import axios from "axios"

const url = 'http://localhost:3306/posts' // URL del servidor de Express

export const obtenerPosts = async () => {
    try {
        const { data:posts } = await axios.get(url)    // Object destructuring con alias
        //console.log(posts)
        return posts
    }
    catch(error) {
        console.error("Hubo un error en la solicitud", error)
    }
}
import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/posts/'

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
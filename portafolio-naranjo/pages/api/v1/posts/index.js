
import axios from "axios";

const handlePosts =  async (req,res) => {
    try{
        const axiosResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const posts = axiosResponse.data;
    
        res.status(200).json(posts.slice(0,10))
    }catch(err){
        console.log("No se pudo obtener los posts!", err.message);
        res.status(err.status || 400).json({message: "Api error"})
    };
};

export default handlePosts;


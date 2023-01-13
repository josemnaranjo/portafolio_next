
import axios from "axios";

const handlePosts =  async (req,res) => {
    try{
        const axiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`);
        const post = axiosResponse.data;
    
        res.status(200).json(post)
    }catch(err){
        console.log("No se pudo obtener los posts!", err.message);
        res.status(err.status || 400).json({message: "Api error"})
    };
};

export default handlePosts;

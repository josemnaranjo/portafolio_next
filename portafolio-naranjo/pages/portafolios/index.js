
import BaseLayout from "../../components/layouts/BaseLayout";
import Link from "next/link";
import axios from 'axios';

const Portafolio = ({posts}) => {

    const renderPosts = () => {
        return posts.map(post => <li key={post.id}>
            <Link href={`/portafolios/${post.id}`}>
                {post.title}
            </Link>
            </li>)
    }
    
    return (
    <BaseLayout>
        <h1>Soy la pagina Portafolio</h1>
        <ul>
            {renderPosts()}
        </ul>
    </BaseLayout>
    )
  };

  Portafolio.getInitialProps = async () => {
    let posts = [];
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        posts = res.data;
    }catch(err){
        console.log("No se pudo obtener los posts!", err.message)
    };
    return { posts: posts.slice(0,10) }
  };
  
  export default Portafolio;
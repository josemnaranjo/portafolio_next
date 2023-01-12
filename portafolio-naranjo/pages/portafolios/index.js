
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetPosts } from "@/actions";




const Portafolio = () => {
    const { posts ,error, loading} = useGetPosts();
    
    const renderPosts = () => {
        return posts.map(post => <li key={post.id}>
            <Link href={`/portafolios/${post.id}`}>
                {post.title}
            </Link>
            </li>)
    }

    return (
    <BaseLayout>
        <BasePage>
            <h1>Soy la pagina Portafolio</h1>
            {
                loading &&
                <p className="alert alert-danger">Cargando...</p>
            }
            {
                posts &&
                <ul>
                    {renderPosts(posts)}
                </ul>
            }
            {
                error &&
                <div className="alert alert-danger">{error.message}</div>
            }
        </BasePage>
    </BaseLayout>
    )
};


export default Portafolio;
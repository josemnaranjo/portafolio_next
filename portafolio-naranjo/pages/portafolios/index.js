
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
// import { useGetData } from "@/actions";
import useSWR from 'swr'



const fetcher = (url)=> fetch(url).then(res => res.json());

const Portafolio = () => {
    const { data ,error} = useSWR('/api/v1/posts', fetcher);
    
    const renderPosts = () => {
        return data.map(post => <li key={post.id}>
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
                data &&
                <ul>
                    {renderPosts(data)}
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
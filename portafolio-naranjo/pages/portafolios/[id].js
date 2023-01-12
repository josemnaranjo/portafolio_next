import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useRouter } from "next/router";
import axios from "axios";

const Portafolio = ({portafolio}) => {
    // const router = useRouter();
    return (
        <BaseLayout>
            <BasePage>
                <h1>{portafolio.title}</h1>
                <p>BODY :{portafolio.body}</p>
                <p>ID: {portafolio.id}</p>
            </BasePage>
        </BaseLayout>
    );
};


Portafolio.getInitialProps = async ({query}) => {
    let post = {};
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
        post = res.data;
    }catch(err){
        console.log("No se pudo obtener el post!", err.message)
    };
    return { portafolio : post }
  };

export default Portafolio;

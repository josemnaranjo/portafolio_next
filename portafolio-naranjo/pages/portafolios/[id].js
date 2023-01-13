import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useRouter } from "next/router";
import { useGetData } from "@/actions";

const Portafolio = () => {
    const router = useRouter();
    const {data,error} = useGetData( router.query.id ? `/api/v1/posts/${router.query.id}` : null)
    return (
        <BaseLayout>
            <BasePage>
            { data &&
                <>
                    <h1>{data.title}</h1>
                    <p>BODY :{data.body}</p>
                    <p>ID: {data.id}</p>
                </>
            }
            { error && <div className="alert alert-danger">{error.message}</div> }
            </BasePage>
        </BaseLayout>
    );
};




export default Portafolio;

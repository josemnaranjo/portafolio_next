
import {useState,useEffect} from 'react';
const fetcher = (url)=> fetch(url).then(res => res.json());


export const useGetData = (url) => {
    const [data,setData] = useState();
    const [error,setError] = useState();

    useEffect(() => {
        async function getData () {
            const res =  await fetch(url);
            const result = await res.json();

            if(res.status !== 200){
                setError(result);
            }else{
                setData(result);
            };
            
        }

        url && getData()
    }, [url]);

    return {data, error}
}
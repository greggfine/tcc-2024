import {useRouter} from "next/router" ;
import useSWR from "swr"

const Result = () => {
    const router = useRouter();
    const {data, error} = useSWR(
        router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
        (url) => fetch(url).then(res => res.json())
    )

    return  ( 
        <>
            <h1>Payment Result</h1>
            <pre>{data? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
        </>
    )
}

export default Result;
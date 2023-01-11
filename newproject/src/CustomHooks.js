import { useEffect,useState } from "react";

function FetchData(url){

    const [data, setData] = useState() 

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(value => setData(value))
        // .then(value => console.log(value))
    },[])

    return data
}

export default FetchData
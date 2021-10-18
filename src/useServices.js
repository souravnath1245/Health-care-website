import { useState, useEffect } from "react";

const useSevices =()=>{
    const [services, setService] = useState([])
    

    useEffect(() => {
       fetch('./helthServices.json').then(res => res.json()).then(data => setService(data))
    }, [])
    return {
        services
    }
}
export default useSevices;
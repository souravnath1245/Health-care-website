import { useState, useEffect } from "react";

const useSevices =()=>{
    const [services, setService] = useState([])
    const [doctors, setDoctors] =  useState([])
    

    useEffect(()=>{
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])

    useEffect(() => {
       fetch('./helthServices.json')
       .then(res => res.json())
       .then(data => setService(data))
    }, [])
    
  
    return {
        services,
        doctors
    }
}
export default useSevices;
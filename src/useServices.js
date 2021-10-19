import { useState, useEffect } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

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
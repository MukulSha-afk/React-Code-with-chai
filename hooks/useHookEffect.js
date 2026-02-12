// how to design custom hook
import { useState } from "react";
import { useEffect,usestate } from "react";
function useHookEffect(currency){

    const[data,setData]= useState({})
    useEffect(() =>{
        fetch('https//api call for currency convertor')
        .then((res) => res.json())
        .then((res) => setData(res))
        console.log(data);
    }, [currency])
    // return [data,setData] wrong approch
    console.log(data);
    return data

}
export default useHookEffect;

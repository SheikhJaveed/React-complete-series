import {useState,useEffect} from 'react'

function useCurrencyInfo(currency){
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.3.11/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((data)=>setData(data[currency]))
    },[currency]) //here dependency is to get the currency
    console.log(data);
    return data;
}

export default useCurrencyInfo;
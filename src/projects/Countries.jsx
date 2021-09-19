import axios from 'axios'
import React , { useEffect , useState } from 'react'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);

    useEffect(() => {
        async function getCountries(){
            return await axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => response)
            .catch(error => console.log(error))
        } 
        setAllCountries(getCountries());  
        console.log(allCountries)    
    }, [])
    return (
        <div>
            hello
        </div>
    )
}

export default Countries

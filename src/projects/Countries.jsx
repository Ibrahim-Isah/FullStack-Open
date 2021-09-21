import axios from 'axios'
import React , { useEffect , useState } from 'react'
import Content from '../components/Countries/Content';
import Filter from '../components/Countries/Filter';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [filtering , setFiltering ] = useState('');

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => setAllCountries(response.data))
            .catch(error => console.log(error))

    }, []);
           console.log(allCountries)



    const handleFilter = (e) => {
        e.preventDefault();
        setFiltering(e.target.value)
        const regex = new RegExp(filtering , 'i');
        const filteredCountries = () => allCountries.filter(country => country.name.match(regex));
        setCountries(filteredCountries)
    }
    return (
        <div>
            <Filter value={filtering} onChange={handleFilter}/>
            <Content countries={countries}/>
        </div>
    )
}

export default Countries

import React from 'react'
import Country from './Country'

const Content = ({countries , setCountries}) => {
    if(countries.length > 10){
        return (
            <div>
                Too many Countries
            </div>
        )
    } else if((countries.length > 2 && countries.length < 10) || countries.length === 0) {
        return (
            <div>
                {countries.map((country , i) => <li key={country[i]}>{country.name}<button onClick={() => setCountries([country])}>show</button></li>)}
            </div>
        )
        
    } else {
        return(
            <Country country={countries[0]}/>
        )
    }
    
}

export default Content

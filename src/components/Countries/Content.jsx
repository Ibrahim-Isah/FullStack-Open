import React from 'react'

const Content = ({countries}) => {
    if(countries.length < 10){
        return (
            <div>
                <ul>
                    {countries.map((country , i) => <li key={country[i]}>{country.name}</li>)}
                </ul>
                {console.log(countries.name)}
            </div>
        )
    } else {
        return (
            <div>
                Too many countries
            </div>
        )
    }
    
}

export default Content

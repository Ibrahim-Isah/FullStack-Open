import React from 'react'

const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h2>languages</h2>
                <ul>
                    {country.languages.map((language , i) => <li key={language[i]}>{language.name}</li>)}
                </ul>
                <img src={country.flag} alt={`${country.name} flag`} style={{width: '50vw'}}/>
        </div>
    )
}

export default Country

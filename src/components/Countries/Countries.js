import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { fetchCountries } from '../../api/covidDetails'


function Countries({handleCountryChange}) {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const fetchCountry = async () => {
            setCountries(await fetchCountries())
        }
        fetchCountry()
    }, [])

    return (
        <div>
            <Form>
                <Form.Group controlId="Form.countrylist">
                    <Form.Label>Select Country</Form.Label>
                    <Form.Control as="select" onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value="">Global</option>
                        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Countries

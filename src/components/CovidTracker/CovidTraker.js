import React, { useEffect, useState } from 'react'
import { fetchData } from '../../api/covidDetails'
import CountUp from 'react-countup'

const CovidTraker = ({data : { confirmed, recovered, deaths,lastUpdate }}) => {
    if(!confirmed)
        return '...loading'
    return (
        <div>
            <div className="cov-head">
                <h2>Confirmed</h2>
                <CountUp start = {0} end = {confirmed.value} separator = ',' duration = {5}/>
                <h2>Recovered</h2>
                <CountUp start = {0} end = {recovered.value} separator = ',' duration = {5}/>
                <h2>Deaths</h2>
                <CountUp start = {0} end = {deaths.value} separator = ',' duration = {5}/>
                <h2>LastUpdate</h2>
                {new Date(lastUpdate).toDateString()}
            </div>
        </div>
    )
}

export default CovidTraker

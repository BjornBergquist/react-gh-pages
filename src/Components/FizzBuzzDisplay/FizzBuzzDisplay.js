import React, { useState } from 'react'
import "./FizzBuzzDisplay.css"

export const FizzBuzzDisplay = (props) => {
    let dataArray
    props.dataArray ? dataArray = props.dataArray : dataArray = ["Players take turns to count incrementally, replacing any number divisible by three with the word fizz, and any number divisible by five with the word buzz."]

    return (
        <div className="fizzbuzz">
            {dataArray.map((data) => <div>{data}</div>)}
        </div>
    )
}

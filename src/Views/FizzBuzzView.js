import React, {useState} from 'react'
import { FizzBuzzDisplay } from '../Components/FizzBuzzDisplay/FizzBuzzDisplay'
import { FizzBuzzInput } from '../Components/FizzBuzzInput/FizzBuzzInput'

export const FizzBuzzView = () => {
    //["1", "2", "fizz", "4"]
    const [fizzbuzzArray, setFizzbuzzArray] = useState(["Players take turns to count incrementally, replacing any number divisible by three with the word \"fizz\", and any number divisible by five with the word \"buzz\"."])
    return (
        <section>
            <h1> FizzBuzz! </h1>
            <h3> Highscore: <span>2</span></h3>
            <FizzBuzzDisplay dataArray={fizzbuzzArray}/>
            <FizzBuzzInput />
        </section>
    )
}

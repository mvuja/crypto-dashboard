import axios from "axios";
import React, { useState } from "react";
import './_calculator.scss'

const Calculator = () => {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']

    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')

    const [amount, setAmount] = useState(1)
    
    const [exchangeRate, setExchangeRate] = useState(0)
    const [result, setResult] = useState(0)

    const convert = () => {

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
            headers: {
              'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
              'x-rapidapi-key': 'd24265ecc8msh1bac037784ae606p1e9c97jsn2046b3c50b91'
            }
        }
          
        axios.request(options).then(function (response) {
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
        }).catch(function (error) {
            console.error(error)
        })
    }

    return (
        <div className="calculator-container">
            <div className="first-currency">
                <input
                type="number"
                name="currency-amount-1"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                />
                <select
                    value={chosenPrimaryCurrency}
                    name="currency-option-1"
                    onChange={e => setChosenPrimaryCurrency(e.target.value)}
                    >

                    {currencies.map( el => (<option>{el}</option>))}

                </select>
            </div>

            <div className="second-currency">
                <input
                name="currency-amount-2"
                value={result}
                disabled={true}
                />
                <select
                    value={chosenSecondaryCurrency}
                    name="currency-option-2"
                    onChange={e => setChosenSecondaryCurrency(e.target.value)}
                    >

                    {currencies.map( el => (<option>{el}</option>))}

                </select>
            </div>

            <button id="btn convert-btn"
            onClick={convert}
            >Convert</button>

            <h3>Exchange rate: {exchangeRate}</h3>
            <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>

        </div>
    )
        
}

export default Calculator
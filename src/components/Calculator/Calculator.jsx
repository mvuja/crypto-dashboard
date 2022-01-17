import React, { useState } from "react";
import axios from "axios";
import './_calculator.scss'

const Calculator = () => {

    const currencies = ['BTC', 'ETH', 'BNB', 'USDT', 'SOL', 'ADA', 'XRP', 'LUNA', 'DOT']
    const currencies2 = ['USD', 'BAM', 'BTC', 'ETH', 'BNB', 'USDT', 'SOL', 'ADA', 'XRP', 'LUNA', 'DOT']

    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD')
    const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState('USD')

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
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        }
          
        axios.request(options).then(function (response) {
            // console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
            setPrimaryCurrencyExchanged(chosenPrimaryCurrency)
            setSecondaryCurrencyExchanged(chosenSecondaryCurrency)
        }).catch(function (error) {
            console.error(error)
        })
    }

    return (
        <section id="calculator">
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

                    {currencies.map( (el, i) => (<option key={i}>{el}</option>))}

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

                    {currencies2.map( (el, i) => (<option key={i}>{el}</option>))}

                </select>
            </div>

            <button id="btn convert-btn"
            onClick={convert}
            >Convert</button>

            <h3>Exchange rate: {exchangeRate}</h3>
            <p>{primaryCurrencyExchanged} to {secondaryCurrencyExchanged}</p>

        </section>
    )
        
}

export default Calculator
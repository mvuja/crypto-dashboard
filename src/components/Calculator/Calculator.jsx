import React, { useState } from "react";
import { Select, SelectOption } from 'reaselct';
import axios from "axios";
import './_calculator.scss'
import { motion } from "framer-motion"

import Button from '../SmallComponents/Button/Button.jsx'

import mainImg from '../../assets/transactions-main-img.png';
import blueCircle from '../../assets/blue-circle-tran.png';

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
        
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <section id="calculator">

                <img className="blue-circle" src={blueCircle} alt="blue circle" />

                <div className="container">
                    <h2>Crypto-Currency Calculator</h2>

                    <div className="currency-boxes">
                        <div className="first-currency currency-box">
                            <p>{primaryCurrencyExchanged}</p>

                            <div className="input-amount">
                                <input
                                type="number"
                                name="currency-amount-1"
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                                />

                                <Select
                                    value={chosenPrimaryCurrency}
                                    onChange={setChosenPrimaryCurrency}
                                    filterable={false}
                                    clearable={false}
                                    >
                                    {currencies.map( (el, i) => (<SelectOption key={i} value={el}>{el}</SelectOption>))}
                                </Select>
                            </div>

                        </div>

                        <div className="second-currency currency-box">
                            <p>{secondaryCurrencyExchanged}</p>

                            <div className="input-amount">
                                <input
                                name="currency-amount-2"
                                value={result}
                                disabled={true}
                                />
                                <Select
                                    value={chosenSecondaryCurrency}
                                    onChange={setChosenSecondaryCurrency}
                                    filterable={false}
                                    clearable={false}
                                    >
                                    {currencies2.map( (el, i) => (<SelectOption key={i} value={el}>{el}</SelectOption>))}
                                </Select>
                            </div>

                        </div>
                    </div>

                    <div className="convert-container">
                        <Button className="convert-btn"
                        onClickHandler={convert}>Convert</Button>

                        <div className="prices-result">
                            <p className="exchange-rate">Exchange rate: {exchangeRate}</p>
                            <p className="total-amount">Total Amount: {result}</p>
                        </div>
                    </div>
                    
                </div>

                <img className="coin-in-hand" src={mainImg} alt="coin in hand" />


            </section>
        </motion.div>
    )
        
}

export default Calculator
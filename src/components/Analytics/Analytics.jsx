import React, { useState, useEffect } from "react";
import './_analytics.scss'
import { Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend , BarElement} from 'chart.js';

import blueCircle from '../../assets/blue-circle-tran.png';
import yellowCircle from '../../assets/yellow-circle-tran.png';



import { motion } from "framer-motion"

const Analytics = () => {
  
  const [coins, setCoins] = useState([])
  const [values, setValues] = useState([])

  const [amounts, setAmounts] = useState([])
  const [amountsCoins, setAmountsCoins] = useState([])


  const temp = localStorage.getItem('contacts')
  useEffect(() => {
    const savedContacts = JSON.parse(temp)
    const holder = []
    const holderAmount = []

    savedContacts.map(el => {
      holder.push(el.coin)
      holderAmount.push(el.amount)
    })

    const counts = {}
    for(let i =0; i < holder.length; i++){ 
        if (counts[holder[i]]){
        counts[holder[i]] += 1
        } else {
        counts[holder[i]] = 1
        }
    }
    
    if(coins && values){
      setCoins(Object.keys(counts))
      setValues(Object.values(counts))
    }

    if(holderAmount){
      const holderAmountPlaceholder = []
      holderAmount.map(el => {
        holderAmountPlaceholder.push(parseInt(el.replace(/,/g, '')))
      })
      setAmounts(holderAmountPlaceholder)
      setAmountsCoins(holder)
    }


    
  }, [])

    

   
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    BarElement
  );

  const data = {
    labels: coins,
    datasets: [
      {
        label: '# of Votes',
        data: values,
        backgroundColor: [
          '#4226f7',
          '#2d6cdf',
          '#46c3db',
          '#DFED38',
        ],
        borderColor: [
          '#4226f7',
          '#2d6cdf',
          '#46c3db',
          '#DFED38',
        ],
        borderWidth: 1,
      },
    ],
  }



  const dataLine = {
    labels: amountsCoins,
    datasets: [
      {
        label: 'Amount spend',
        data: amounts,
        borderColor: '#DFED38',
        backgroundColor: '#DFED38',
      },
    ],
  }

  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Analytics pulled from Transactions amount',
        color: '#fff',
      },
    },
  };

  const optionsPie = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Representation by currency',
        color: '#fff',
        padding: 20
      },
    },
  };

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <section id="analytics">

        <img className="blue-circle" src={blueCircle} alt="blue circle" />
          <img className="yellow-circle" src={yellowCircle} alt="yellow circle" />

        <div className="container">
          <h2>Analytics</h2>
          <div className="charts">
            <div className="canvas-pie canvas">
              <Pie data={data} options={optionsPie} />
            </div>
            <div className="canvas-bar canvas">
              <Bar options={options} data={dataLine} />
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  )
        
}

export default Analytics
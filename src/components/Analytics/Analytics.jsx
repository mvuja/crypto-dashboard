import React, { useState, useEffect } from "react";
import './_analytics.scss'
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

import { motion } from "framer-motion"

const Analytics = () => {

    useEffect(() => {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ];
        
          const data = {
            labels: labels,
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgba(255, 99, 132, .3)',
              data: [0, 10, 5, 2, 20, 30, 45],
            }]
          };
        
          const config = {
            type: 'line',
            data: data,
            options: {}
          };
          
          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
    }, [])

    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <section id="analytics">
            <canvas id="myChart"></canvas>
        </section>
      </motion.div>
    )
        
}

export default Analytics
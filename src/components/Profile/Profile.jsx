import React, { useState, useEffect } from "react";
import './_profile.scss'
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

const Profile = () => {

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
        <section id="profile">
            <canvas id="myChart"></canvas>
        </section>
    )
        
}

export default Profile
import React, { useState, useEffect } from "react";
import './_profile.scss'
import axios from "axios";
import newsImg from '../../assets/news-img.png';
import blueCircle from '../../assets/blue-circle.png';
import yellowCircle from '../../assets/yellow-circle.png';
// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';

const Profile = () => {

    // useEffect(() => {
    //     const labels = [
    //         'January',
    //         'February',
    //         'March',
    //         'April',
    //         'May',
    //         'June',
    //         'July',
    //       ];
        
    //       const data = {
    //         labels: labels,
    //         datasets: [{
    //           label: 'My First dataset',
    //           backgroundColor: 'rgb(255, 99, 132)',
    //           borderColor: 'rgba(255, 99, 132, .3)',
    //           data: [0, 10, 5, 2, 20, 30, 45],
    //         }]
    //       };
        
    //       const config = {
    //         type: 'line',
    //         data: data,
    //         options: {}
    //       };
          
    //       const myChart = new Chart(
    //         document.getElementById('myChart'),
    //         config
    //       );
    // }, [])


    const [articles, setArticles] = useState(null)

    useEffect(() => {

        const options = {
          method: 'GET',
          url: 'https://crypto-news14.p.rapidapi.com/news/coindesk',
          headers: {
            'x-rapidapi-host': 'crypto-news14.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
          }
        };
    
        axios.request(options).then(function (response) {
            // console.log(response.data)
            setArticles(response.data)
        }).catch(function (error) {
            console.error(error)
        })
    }, [])

    const firstArticle = articles?.slice(0, 1)
    const firstTenArticles = articles?.slice(1, 10)


    return (
      <section id="profile">

        <img className="blue-circle" src={blueCircle} alt="blue circle" />
        <img className="yellow-circle" src={yellowCircle} alt="yellow circle" />

        <h2>News</h2>
        {/* <canvas id="myChart"></canvas> */}
        
        <div className="news-container">
          <div className="main-news">
          {firstArticle?.map((el, i) => (
              <a key={i} href={`https://www.coindesk.com/${el.url}`} target='_blank'>
                <p className="news-date">{el.date}</p>
                <h3 className="news-title">{el.title}</h3>
                <p className="news-desc">{el.desc}</p>
                <img src={newsImg} alt="Bitcoin" />
              </a>
            ))}
          </div>


          <div className="other-news">

            {firstTenArticles?.map((el, i) => (
              <a key={i} href={`https://www.coindesk.com/${el.url}`} target='_blank'>
                <h3 className="news-title">{el.title}</h3>
                <p className="news-date">{el.date}</p>
              </a>
            ))}

          </div>
        </div>


      </section>
    )
        
}

export default Profile
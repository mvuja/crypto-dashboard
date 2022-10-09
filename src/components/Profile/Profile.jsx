import React, { useState, useEffect } from "react";
import './_profile.scss'
import axios from "axios";
import newsImg from '../../assets/news-img.png';
import blueCircle from '../../assets/blue-circle.png';
import yellowCircle from '../../assets/yellow-circle.png';

import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

import { motion } from "framer-motion"

const Profile = () => {

    const [articles, setArticles] = useState(null)


    useEffect(() => {

        const options = {
          method: 'GET',
          url: 'https://crypto-news14.p.rapidapi.com/news/cointelegraph',
          headers: {
            'x-rapidapi-host': 'crypto-news14.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
          }
        }
    
        trackPromise(
          axios.request(options).then(function (response) {
            setArticles(response.data)
          }).catch(function (error) {
              console.error(error)
          })
        )

    }, [])

    const firstArticle = articles?.slice(0, 1)
    const firstTenArticles = articles?.slice(1, 10)



    // LOADER
    const { promiseInProgress } = usePromiseTracker()

    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    const color = '#fff'


    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <section id="profile">

          <img className="blue-circle" src={blueCircle} alt="blue circle" />
          <img className="yellow-circle" src={yellowCircle} alt="yellow circle" />


          {(promiseInProgress === true) ?
          <div id="loader">
            <PropagateLoader color={color} css={override} size={20} />
          </div>
          :
          <div className="helper">       
            <h2>News</h2>
            
            <div className="news-container">
              <div className="main-news">
              {firstArticle?.map((el, i) => (
                  <a key={i} rel="noreferrer" href={`${el.url}`} target='_blank'>
                    <p className="news-date">{new Date(el.date).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"})}   </p>
                    <h3 className="news-title">{el.title}</h3>
                    <p className="news-desc">{el.desc}</p>
                    <img src={newsImg} alt="Bitcoin" />
                  </a>
                ))}
              </div>

              <div className="other-news">

                {firstTenArticles?.map((el, i) => (
                  <a key={i} rel="noreferrer" href={`${el.url}`} target='_blank'>
                    <h3 className="news-title">{el.title}</h3>
                    <p className="news-date">{new Date(el.date).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"})}</p>
                  </a>
                ))}

              </div>
            </div>

          </div>
          }
        </section>
      </motion.div>

    )
        
}

export default Profile
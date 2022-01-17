import React, { useState, useEffect } from "react";
import axios from "axios";
import './_news.scss'

const News = () => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://crypto-news-live3.p.rapidapi.com/news',
            headers: {
                'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        }
    
        axios.request(options).then(function (response) {
            // console.log(response.data)
            setArticles(response.data)
        }).catch(function (error) {
            console.error(error)
        })
    }, [])

    const firstTenArticles = articles?.slice(0, 10)


    return (
        <section id="news">
            <h2>News Feed</h2>
            {firstTenArticles?.map((el, i) => (
                <div key={i}>
                    <a href={el.url} target='_blank'>{el.title}</a>
                    <p>Source: {el.source}</p>
                </div>
            ))}
        </section>
    )
        
}

export default News
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewnews = () => {
    const [News, ChangeNews] = useState(
        { "articles": [] }
    )

    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
            (response) => {
                ChangeNews(response.data)
            }
        ).catch()
    }

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1 align="center" className='text-info'>LATEST NEWS</h1>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {
                                News.articles.map(
                                    (data, index) => {
                                        return (

                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                                <div class="card">
                                                    <div class="card-header">
                                                        <img src={data.urlToImage} class="card-img-top" alt="..."></img>
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">{data.title}</h5>
                                                        <p class="card-text">{data.description}</p>
                                                        <a href={data.url} target="_blank" class="btn btn-primary">Click Here</a>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Viewnews
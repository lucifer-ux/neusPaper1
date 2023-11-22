import React, { useEffect } from 'react'
import './boxImageText.css'
import inshorts from 'inshorts-news-api'

const neusApp = async () => {

    let options = {
        language: 'en',
        category: '' 
      }
    const newsData = await inshorts.getNews(options);
    console.log(newsData)
    // newsData.news.forEach(newsItem => {
    //     const newsObj = newsItem.news_obj;
    //     console.log(newsObj)
    //     });
    
}

const BoxImageText = () => {

    useEffect(() => {
        neusApp();
    }, []);

  return (
    <>
        <div className='container'>
            <div className='leftImage'>
                <img src='' alt='something'/>
            </div>
            <div className='textOnRight'>
                <h1>Title</h1>
                <p>paragraph</p>
            </div>

        </div>
    </>
  )
}

export default BoxImageText
const inshorts = require('inshorts-news-api');

var options = {
    language: 'en',
    category: 'cricket' 
  }
var newsData
    async function main  () {
        newsData = await inshorts.getNews(options);
        newsData.news.forEach(newsItem => {
            const newsObj = newsItem.news_obj;
          });
        console.log(newsData.news.length)
        return newsData;
    } 
    
    main();
  var options = {
    language: 'language',
    category: 'category',
    news_offset: 'news_offset from previous response'
  }
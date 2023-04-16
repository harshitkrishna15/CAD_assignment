import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }


 const updateNews =  async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json()
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
    }
    

    useEffect(() => {
      document.title = `News Monkey --- ${capitalizeFirstLetter(props.category)}`;
      updateNews();
      // eslint-disable-next-line 
    }, [])

 

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

      return (
        <>
        <h1 className = "text-center my-" style={{marginTop:"100px"}}>News Monkey</h1>
        <h3 className = "text-center my-5">Newspapers cannot be defined by the second word-paper.</h3>
        <hr />
        <h2 className = "text-center" >--- Top {capitalizeFirstLetter(props.category)} Headlines ---</h2>
        <hr className = "my-4"/>

        {loading && <Spinner />}
  
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen it all --- Try exploring other categories</b>
            </p>
          }
          > 

        <div className="container my-5">
        <div className="row">
        
          {articles.map((element)=>{

          return <div className="col-md-4 my-5" key={element.url}>
            <NewsItem  title= {element.title?element.title:""} description= {element.description?element.description:""} imageUrl= {element.urlToImage} newsUrl={element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name} />
          </div>
      })}
      </div>
      </div>
       </InfiniteScroll>
       </>
    )
  
}


News.defaultProps = {
  country: "in",
  pageSize:9,
  category:"general"
}

News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News;
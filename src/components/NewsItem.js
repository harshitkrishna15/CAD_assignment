import React from "react";

const NewsItem = (props)=> {
  
    let { title, description, imageUrl, newsUrl, date, author, source} = props;
    return (
      <div>
        <div>
          <div className="card" style={{marginTop:"-50px"}}>
            <img
              src={
                !imageUrl
                  ? "https://miro.medium.com/max/1400/1*F5ZRnmDY6ZsnGjZN7hyGZg.jpeg"
                  : imageUrl
              }
              className="card-img-top"
              alt="Unable to load"
            />
            <div className="card-body bg-light">

              <div style={{display: 'flex',
            justifyContent:'flex-end',
            position:'absolute',right:"5px",top:"5px"
            }}>
              <span className="badge rounded-pill bg-danger">
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
              </div>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-dark">
                  By {author ? author : "Unknown"} ... on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-danger my-2"
                style = {{opacity:"0.9"}}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem

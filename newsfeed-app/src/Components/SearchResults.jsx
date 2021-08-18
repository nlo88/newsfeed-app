import React from 'react';

function SearchResults(props) {

    const { news } = props;
    // if(!articles.length) {
    //     return <h2>No Articles Found!</h2>
    // }

   

    return (

        <div className="news">
            {/* {news.map(news=> (
                <div key={news.id} className="news">
                    <img src={news.urlToImages} alt={news.title} />
                </div>
            ))}*/}


        <input></input>
        <button type="submit">SEARCH</button>

        </div>
    );
}

export default SearchResults;
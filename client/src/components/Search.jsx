import React, { Fragment, useState } from "react";
import { ResultData } from "./ResultData";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState();

  const searchTrigger = (e) => {  
    e.preventDefault();
    const headers = { 'Content-Type': 'application/json' }
    fetch('http://localhost:8000/api/v1/search/index?q='+searchText, { headers })
        .then(response => response.json())
        .then(data => {
            setResult(data.data);
        });
    /*
    fetch("http://localhost:8000/api/v1/search/index?q=" + searchText, {
      //method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchText }),
    }).then(async (response) => {
        const data = await response.json();
        console.log(data);
    }).catch(error => {
        setError(error);
    })
  */    
  };
  return (
    <>
        <div className="row">
          <div className="col">
            <h2>Music search api called here</h2>
            <div className="search">
            <form onSubmit={searchTrigger}>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="txtSearch"
                  placeholder="search by song, music, artist"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <label htmlFor="txtEmail">Search</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Search
              </button>
            </form>
            </div>
          </div>
        </div>
        <div className="row">
            <ResultData data={result}/>
        </div>
    </>
  )
};
export default Search;
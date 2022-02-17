import React from 'react'

export default function Search() {
  return (
    <>
        <div className="row">
          <div className="col">
            <h2>Music search api called here</h2>
            <div className="search">
              <form>
                <div className="mb-3">
                  <label htmlFor="txtSearch" className="form-label">Search Music</label>
                  <input type="text" className="form-control" id="txtSearch" placeholder="search music title, song name etc"/>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

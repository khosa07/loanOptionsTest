import "./App.css";
import React, { useState } from "react";

function App() {
  const [universities, setUniversities] = useState([]);
  const getContacts = () => {
    fetch("http://universities.hipolabs.com/search?country=Australia")
      .then((response) => response.json())
      .then((uniJson) => setUniversities(uniJson));
  };

  const removeLastEntry = () => {
    setUniversities(universities.slice(0, -1));
  };

  const addEntry = () => {
    setUniversities([...universities, universities[0]]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Buttons">
          <button onClick={getContacts} className="LoadButton">
            Load
          </button>
          <button onClick={removeLastEntry} className="DeleteButton">
            Delete
          </button>
          <button onClick={addEntry} className="AddButton">
            Add
          </button>
        </div>
        <table className="Table">
          <tr>
            <th className="Table-header">Country</th>
            <th className="Table-header">University Name</th>
            <th className="Table-header-Multiple-Entries">Domain</th>
            <th className="Table-header-Multiple-Entries">Webpage</th>
          </tr>
          {universities.map((val, key) => {
            return (
              <tr key={key} className="Table-spacing">
                <td>
                  {val.country} ({val.alpha_two_code})
                </td>
                <td>{val.name}</td>
                <td>
                  {val.domains.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td className="Table-domain-spacing">{value}</td>
                      </tr>
                    );
                  })}
                </td>
                <td>
                  {val.web_pages.map((webPage, key) => {
                    return (
                      <tr key={key}>
                        <td className="Table-domain-spacing">{webPage}</td>
                      </tr>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </table>
      </header>
    </div>
  );
}

export default App;

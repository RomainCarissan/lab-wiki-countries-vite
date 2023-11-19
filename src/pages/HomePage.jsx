import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countriesNames, setCountriesNames] = useState([]);

  async function fetchCountries() {
    try {
      const rawresponse = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const data = await rawresponse.json();
      setCountriesNames(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: 24 }}>WikiCountries: Your Guide to the World</h1>
      <div className="list-group">
        {countriesNames.map((element) => {
          return (
            <Link to={`/${element.alpha3Code}`} key={element.alpha3Code}>
              <div className="list-group-item list-group-item-action">
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`}
                  alt=""
                  height={"20px"}
                />
                {element.name.common}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

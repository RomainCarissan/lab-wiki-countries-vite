import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
/* import axios from "axios"; */

function CountryDetails() {
  const { countryId } = useParams();

  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [countryCode, setCountryCode] = useState();

  const fetchCountry = async () => {
    const response = await fetch(
      `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    );
    if (response.ok) {
      const parsed = await response.json();
      setCountry(parsed);
      setIsLoading(false);
      setCountryCode(parsed.alpha3Code);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  useEffect(() => {
    fetchCountry();
  }, [countryCode]);

  return isLoading ? (
    <h1>ça mouline...</h1>
  ) : (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt=""
      />
      <h1>{country.name.official}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((currentBorder) => {
                  return (
                    <Link
                      onClick={() => {
                        setCountryCode(currentBorder);
                      }}
                      to={`/${currentBorder}`}
                      key={currentBorder}
                    >
                      <li>
                        <p>{currentBorder}</p>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;

import { React } from "react";
import { useQuery, gql } from "@apollo/client";
import "./countries.css";
import { useLocation } from "react-router-dom";

export default function Countries(props) {
  const path = useLocation().pathname.slice(1);

  const CONTINENT_COUNTRIES = gql`
    query GetContinent($contCode: ID!) {
      continent(code: $contCode) {
        name
        countries {
          code
          name
          native
          capital
          currency
          languages {
            name
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(CONTINENT_COUNTRIES, {
    variables: { contCode: path },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="countriesContainer">
      <h2 className="countriesTableTitle">{data.continent.name}</h2>
      <table className="countriesTable">
        <thead>
          <tr>
            <th className="countriesTableHead">Code</th>
            <th className="countriesTableHead">Name</th>
            <th className="countriesTableHead">Native</th>
            <th className="countriesTableHead">Capital</th>
            <th className="countriesTableHead">Currency</th>
            <th className="countriesTableHead">Language</th>
          </tr>
        </thead>
        <tbody>
          {data.continent.countries.map(
            ({ code, name, native, capital, currency, languages }) => (
              <tr key={code}>
                <td className="countriesTableCell">{code}</td>
                <td className="countriesTableCell">{name}</td>
                <td className="countriesTableCell">{native}</td>
                <td className="countriesTableCell">{capital}</td>
                <td className="countriesTableCell">{currency}</td>
                <td className="countriesTableCell">
                  <table>
                    <tbody>
                      {languages
                        ? languages.map(({ name }) => (
                            <tr key={name}>
                              <td className="countriesLanguagesCell">{name}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

import { useQuery, gql } from "@apollo/client";
import "./continents.css";
import { Link } from "react-router-dom";

const CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
      countries {
        code
      }
    }
  }
`;

export default function Continents() {
  const { loading, error, data } = useQuery(CONTINENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="continentsContainer">
      <h2 className="continentsTableTitle">Continents</h2>
      <table className="continentsTable">
        <thead>
          <tr>
            <th className="continentsTableHead">Code</th>
            <th className="continentsTableHead">Name</th>
            <th className="continentsTableHead">Num of Countries</th>
          </tr>
        </thead>
        <tbody>
          {data.continents.map(({ code, name, countries }) => (
            <tr key={code}>
              <td className="continentsTableCell">{code}</td>
              <td className="continentsTableCell">
                <Link to={code}>{name}</Link>
              </td>
              <td className="continentsTableCell">
                {Object.keys(countries).length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

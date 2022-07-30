import { useEffect, useState } from "react";
import { LiCard } from "./styles";
import api from "../services/api";

const Card = ({ changePage, buttonMore }) => {
  const [listPerson, setListPerson] = useState([]);
  console.log(listPerson);
  useEffect(() => {
    api
      .get("character", {
        params: {
          page: `${changePage}`,
        },
      })
      .then((res) => setListPerson(res.data.results));
  }, [changePage]);

  return (
    <ul>
      {listPerson.map(
        ({ id, image, name, origin, species, status, location }) =>
          status === "Alive" ? (
            <LiCard key={id} className="Card Card--LiPersonAlive">
              {!buttonMore ? (
                <>
                  <img src={image} alt={name} />
                  <p className="name">{name}</p>
                </>
              ) : (
                <>
                  <p>
                    Name: <br />
                    {name}
                  </p>
                  <p>
                    Origin: <br />
                    {origin["name"]}
                  </p>
                  <p>
                    Species: <br />
                    {species}
                  </p>
                  <p>
                    Status: <br />
                    {status}
                  </p>
                  <p>
                    Location: <br />
                    {location["name"]}
                  </p>
                </>
              )}
            </LiCard>
          ) : (
            <LiCard key={id} className="Card Card--LiPersonDead">
              {!buttonMore ? (
                <>
                  <img src={image} alt={name} />
                  <p className="name">{name}</p>
                </>
              ) : (
                <>
                  <p>
                    Name: <br />
                    {name}
                  </p>
                  <p>
                    Origin: <br />
                    {origin["name"]}
                  </p>
                  <p>
                    Species: <br />
                    {species}
                  </p>
                  <p>
                    Status: <br />
                    {status}
                  </p>
                  <p>
                    Location: <br />
                    {location["name"]}
                  </p>
                </>
              )}
            </LiCard>
          )
      )}
    </ul>
  );
};

export default Card;

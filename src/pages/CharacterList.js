import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";
import { Link } from "react-router-dom";
const CharacterList = () => {
  const { error, data, loading } = useCharacters();
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>error...</div>;
  }

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharacterList;

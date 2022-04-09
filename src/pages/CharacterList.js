import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";
const CharacterList = () => {
  const { error, data, loading } = useCharacters();
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>error...</div>;
  }
  console.log({ error, data, loading });

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;

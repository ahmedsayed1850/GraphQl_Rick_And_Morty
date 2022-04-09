import React from "react";
import { useCharacter } from "../hooks/useCharacter";

const Character = () => {
  const { data, loading, error } = useCharacter(4);
  console.log({ error, loading, data });
  return <div>sadeqdeq</div>;
};

export default Character;

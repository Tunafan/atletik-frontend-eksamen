import React from "react";
import useClubs from "../hooks/useClubs";

const Clubs: React.FC = () => {
  const { clubs, loading, error } = useClubs();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Clubs</h2>
      <ul>
        {clubs.map((club) => (
          <li key={club.id}>
            {club.name}, <br /> {club.city} <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clubs;

import React from "react";
import useAthletes from "../hooks/useAthletes";

const Athletes: React.FC = () => {
  const { athletes, loading, error } = useAthletes();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Athletes</h2>
      <ul>
        {athletes.map((athlete) => (
          <li key={athlete.memberId}>
            {athlete.name} - {athlete.gender} - {athlete.age} {"år"} -{" "}
            {athlete.clubName}
            <button>Redigér info</button>
            <button>Slet atlet</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Athletes;

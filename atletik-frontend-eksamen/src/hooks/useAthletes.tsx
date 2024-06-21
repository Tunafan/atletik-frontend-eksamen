// @ts-nocheck
import { useState, useEffect } from "react";

const API_URL = "http://localhost:8080";

export interface Athlete {
  memberId: number;
  name: string;
  gender: string;
  age: number;
  clubName: string;
}

const useAthletes = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAthletes = async () => {
    try {
      const response = await fetch(`${API_URL}/athletes/all`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const fetchedAthletes = await response.json();
      setAthletes(fetchedAthletes);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAthletes();
  }, []);

  return { athletes, loading, error };
};

export default useAthletes;

// @ts-nocheck
import { useState, useEffect } from "react";
import { API_URL } from "../config/settings";

export interface Club {
  id: number;
  name: string;
  city: string;
}

const useClubs = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClubs = async () => {
    try {
      const response = await fetch(`${API_URL}/clubs/all`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setClubs(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  return { clubs, loading, error };
};

export default useClubs;

// @ts-nocheck
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../config/settings";
import { Athlete } from "../config/interfaces";

const useAthletes = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const registerAthlete = async (newAthlete: Athlete) => {
    try {
      const response = await fetch(`${API_URL}/athletes/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAthlete),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const addedAthlete = await response.json();
      setAthletes([...athletes, addedAthlete]);
      toast.success("Oprettelse lykkedes!");
    } catch (error) {
      setError(error.message);
      toast.error(`Fejl: ${error.message}`);
    }
  };

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
      toast.error(`Fejl: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const updateAthlete = async (updatedAthlete: Athlete) => {
    try {
      const response = await fetch(
        `${API_URL}/athletes/${updatedAthlete.memberId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedAthlete),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const updatedAthletes = athletes.map((athlete) =>
        athlete.memberId === updatedAthlete.memberId ? updatedAthlete : athlete
      );
      setAthletes(updatedAthletes);
      toast.success("Info opdateret!");
    } catch (error) {
      setError(error.message);
      toast.error(`Fejl: ${error.message}`);
    }
  };

  const deleteAthlete = async (athleteId: number) => {
    try {
      const response = await fetch(`${API_URL}/athletes/${athleteId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Bad network response");
      }
      setAthletes(athletes.filter((athlete) => athlete.memberId !== athleteId));
      toast.success("Atlet fjernet fra system");
    } catch (error) {
      setError(error.message);
      toast.error(`Fejl: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchAthletes();
  }, []);

  return {
    athletes,
    loading,
    error,
    updateAthlete,
    registerAthlete,
    deleteAthlete,
  };
};

export default useAthletes;

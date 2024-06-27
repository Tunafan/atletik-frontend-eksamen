// src/types.ts

export interface Athlete {
  memberId: number;
  name: string;
  gender: string;
  age: number;
  clubName: string;
}

export interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  athlete: {
    name: string;
    clubName: string;
  } | null;
}

export interface Club {
  id: number;
  name: string;
  city: string;
}

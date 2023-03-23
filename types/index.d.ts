import React from "react";

declare global {
  type DefaultFC = React.FC<React.PropsWithChildren>;
  type ExtendedFC<T> = React.FC<React.Props<T>>;
  

  type Profile = IProfile;
  IProfile;
}

type Personal = {
  name: string;
  surname: string;
  linkedin: string;
  phone: string;
  location: string;
};

type Contact = {
  alias: string;
  email: string;
  phone: string;
};

type Strength = {
  title: string;
  description: string;
};

type Language = {
  name: string;
  level: string;
};

type Certification = {
  title: string;
  institution: string;
  year: number;
};

type Skill = {
  kind: "Soft" | "Hard";
  title: string;
};

type Experience = {
  from: Date;
  to: Date;
  employer: string;
  position: string;
};

type Link = {
  to: string;
  text: string;
};

interface IProfile {
  id: string;
  personal: Personal;
  contact: Contact?;
  about: string;
  strengths: Strength[];
  languages: Language[];
  certifications: Certification[];
  experience: Experience[];
  skills: Skill[];
}

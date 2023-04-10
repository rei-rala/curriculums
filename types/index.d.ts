import React from "react";

declare global {
  type CurriculumPage = React.FC<{ profile: IProfile }>;
  type DefaultFC = React.FC<React.Props>;
  type ExtendedFC<T> = React.FC<T>;

  type Personal = {
    name: string;
    surname: string;
    about: string;
    linkedin: string;
    phone: string;
    location: string;
    photo?: string;
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
    contact: Contact;
    about: string;
    strengths: Strength[];
    languages: Language[];
    certifications: Certification[];
    experience: Experience[];
    skills: Skill[];
  }

  interface IProfilePartial {
    id: string;
    name: string;
    surname: string;
    about: string;
    photo?: string;
    alias: string;
  }

  interface IApiError {
    message: string;
    statusCode: number;
  }
}

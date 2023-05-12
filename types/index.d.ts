import React from "react";

declare global {
  type UserType = "recruiter" | "candidate"
  
  interface IUser {
    userType?: UserType;
    fullName?: string;
    email?: string;
    password?: string;
    validatedEmail?: boolean;
    alias?: string
  }
  

  interface Credentials {
    userType: UserType
    email: string;
    password: string;
  }

  
  interface Personal {
    name: string;
    surname: string;
    location: string;
    photo?: string;
  }

  interface Contact {
    alias: string;
    email: string;
    phone: string;
    linkedin: string;
    linkedinName?: string;
  }

  interface Strength {
    title: string;
    description: string;
  }

  interface Language {
    name: string;
    level: string;
  }

  interface AcademicBackground {
    title: string;
    institution: string;
    from: Date;
    to: Date;
  }

  interface Skill {
    kind: SkillKind;
    title: string;
  }

  interface WorkExperience {
    from: Date;
    to: Date;
    employer: string;
    position: string;
  }

  interface Link {
    to: string;
    text: string;
  }

  interface IProfile {
    id: string;
    personal: Personal;
    contact: Contact;
    about: string;
    strengths: Strength[];
    languages: Language[];
    academicBackground: AcademicBackground[];
    workExperience: WorkExperience[];
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

  type CurriculumComponentProps = { [K in keyof IProfile]?: IProfile[K] };
  type DefaultFC = React.FC<React.Props>;
  type ExtendedFC<T> = React.FC<T>;
  type CurriculumFC = ExtendedFC<CurriculumComponentProps>;

  interface IApiError {
    message: string;
    data?: any;
    statusCode: number;
  }
}

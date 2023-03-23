import Personal from "@/components/curriculum/Personal/Personal";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

export async function getServerSideProps(ctx: any) {
  const id = ctx.query.id ?? null;

  const options = {
    method: "get",
    url: "/api/profile",
    data: { id },
  };

  let data =
    (await axios("http://localhost:3000/api/profile", options)).data ?? null;

  return {
    props: {
      profileFound: data.profile || null,
    },
  };
}

const CvPage: React.FC<{ profileFound: Profile }> = ({ profileFound }) => {
  const [profile, setProfile] = useState<Profile | null>(profileFound);

  if (!profile)
    return (
      <>
        <h2>No se encontro perfil, perejil</h2>
        <Link href="/cv">Volver</Link>
      </>
    );

  return (
    <>
      <i>{profile.id}</i>
      <Personal personal={profile.personal} />

      <div>
        <h3>About</h3>
        {profile.about}
      </div>

      <div>
        <h3>Strengths</h3>
        <ul>
          {profile.strengths.map((s) => (
            <li key={s.title}>
              <p>
                <b>{s.title}:</b> {s.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Certifications</h3>
        <ul>
          {profile.certifications.map((c, i) => (
            <li key={c.institution + c.year + i}>
              <p>{c.title}</p>
              <p>
                {c.institution} - {c.year}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Experience</h3>
        <ul>
          {profile.experience
            .sort((a, b) => (a.from > b.to ? -1 : 1))
            .map((e, i) => (
              <li key={e.employer + i + e.from + e.to}>
                <b>{e.position}</b> <i>{e.employer}</i>
                <div>
                  {new Date(e.from).toLocaleDateString()} -{" "}
                  {new Date(e.to).toLocaleDateString()}
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h3>Languages</h3>

        <ul>
          {profile.languages.map((l) => (
            <li key={l.name}>
              <p>
                <b>{l.name}</b>: {l.level}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Skills</h3>

        <ul>
          {profile.skills
            .sort((a, b) => (a.kind > b.kind ? 1 : -1))
            .map((s) => (
              <li key={s.kind + s.title}>
                <p>
                  <b>{s.kind}</b>: {s.title}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default CvPage;

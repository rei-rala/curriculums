import React, { useEffect, useState } from "react";
import Personal from "@components/curriculum/Personal/Personal";
import { getProfileByAlias } from "@services/profiles.services";
import Loading from "@components/Loading/Loading";

const MyCvPage: DefaultFC = () => {
  let myHardcodedAlias = "asd";
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile>();

  useEffect(() => {
    // Forzando un delay de 1 segundo para simular una carga mas alta y mostrar el skeleton/loading state
    setTimeout(() => {
      getProfileByAlias(myHardcodedAlias)
        .then((p) => {
          if (p) setProfile(p);
        })
        .finally(() => setLoading(false))
    }, 10000)
  }, [myHardcodedAlias]);

  if (loading) return <Loading />;

  if (!profile) return null;

  return (
    <>
      <h1>Bienvenido a tu perfil, {profile.personal.name}! </h1>
      <p>Display de tu perfil</p>
      <hr />

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

export default MyCvPage;

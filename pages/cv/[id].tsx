import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import axios, { AxiosRequestConfig } from "axios";

import { Fade, LinearProgress } from "@mui/material";
import { getUrlFromClient } from "@/utils";

import Personal from "@/components/curriculum/Personal/Personal";

async function getProfile(id: string): Promise<IProfile | null> {
  let url = getUrlFromClient();

  const options: AxiosRequestConfig = {
    method: "get",
    baseURL: `${url}/api`,
    url: `profiles/id/${id}`,
  };

  try {
    let { data } = await axios<{ profile: IProfile }>(options);
    return data.profile;
  } catch {
    return null;
  }
}

const CvPage: DefaultFC = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (id) {
        getProfile(id)
          .then(setProfile)
          .finally(() => setLoading(false));
      }
    }, 1000);
  }, [id]);

  if (loading) return <LinearProgress />;

  if (!profile)
    return (
      <>
        <Head>
          <title>CV no encontrado | Curriculums</title>
        </Head>
        <h2>No se encontro perfil, perejil</h2>
        <Link href="/cv">Volver</Link>
      </>
    );

  const {
    personal,
    strengths,
    contact,
    languages,
    certifications,
    experience,
    skills,
  } = profile;

  return (
    <>
      <Head>
        <title>{`${ contact?.alias || personal?.name || id } | Curriculums`}</title>
      </Head>

      {/* TODO */}
      <Fade in>
        <div>
          <Personal personal={personal} />
          <hr />

          <div>
            <h3>Strengths</h3>
            <ul>
              {strengths.map((s) => (
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
              {certifications.map((c, i) => (
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
            <h3>Languages</h3>

            <ul>
              {languages.map((l) => (
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
              {skills
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
        </div>
      </Fade>
    </>
  );
};

export default CvPage;

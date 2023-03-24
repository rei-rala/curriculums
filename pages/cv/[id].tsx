import React, { useState } from "react";
import Link from "next/link";

import Personal from "@/components/curriculum/Personal/Personal";
import axios, { AxiosRequestConfig } from "axios";
import Head from "next/head";

export async function getServerSideProps(ctx: any) {
  const id = ctx.query.id ?? null;
  let profile = null;

  if (id) {
    const options: AxiosRequestConfig = {
      method: "get",
      baseURL: "http://localhost:3000/api",
      url: `profiles/id/${id}`,
    };

    try {
      profile = (await axios<{profile: Profile}>(options)).data?.profile;
    } catch (e) {
      console.log(`error => ` + e)
    }
  }


  return {
    props: {
      profile
    },
  };
}

const CvPage: CurriculumPage = ({ profile }) => {

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
    id,
    personal,
    strengths,
    contact,
    languages,
    certifications,
    experience,
    skills,
  } = profile

  return (
    <>
      <Head>
        <title>{`CV de ${contact?.alias || personal?.name || id} | Curriculums`}</title>
      </Head>
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
    </>
  );
};

export default CvPage;

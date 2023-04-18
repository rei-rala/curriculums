import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { getProfileByAlias } from "@services/profiles.services";
import Loading from "@components/Loading/Loading";
import Curriculum from "@components/curriculum/Curriculum";


const CvPage: DefaultFC = () => {
  const router = useRouter();
  const alias: string = router.query.alias as string;

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile | null>(null);

  useEffect(() => {
    // Forzando un delay de 1 segundo para simular una carga mas alta y mostrar el skeleton/loading state
    setTimeout(() => {
      if (alias) {
        getProfileByAlias(alias)
          .then(setProfile)
          .finally(() => setLoading(false));
      }
    }, 1000);
  }, [alias]);

  if (loading) return <Loading />;

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



  return (
    <main>
      <Head>
        <title>{`${profile.contact?.alias || profile.personal?.name || alias} | Curriculums`}</title>
      </Head>

      <Curriculum profile={profile} />
    </main>
  );
};

export default CvPage;

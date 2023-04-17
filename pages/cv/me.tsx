import React, { useEffect, useState } from "react";

import Loading from "@components/Loading/Loading";
import { Curriculum } from "@/components/curriculum";

import { getProfileByAlias } from "@services/profiles.services";

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
        .finally(() => setLoading(false));
    }, 10000);
  }, [myHardcodedAlias]);

  if (loading) return <Loading />;

  if (!profile) return null;

  return (
    <>
      <h1>Bienvenido a tu perfil, {profile.personal.name}! </h1>
      <p>Display de tu perfil</p>
      <hr />

      <Curriculum profile={profile} />
    </>
  );
};

export default MyCvPage;

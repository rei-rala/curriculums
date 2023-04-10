import React, { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { getUrlFromClient } from "@/utils";

import ProfileCard from "@/components/ProfileCard/ProfileCard";
import Link from "next/link";
import ProfileCardSkeleton from "@/components/ProfileCard/ProfileCardSkeleton";


async function getProfiles(): Promise<IProfilePartial[]> {
  let url = getUrlFromClient()

  const options: AxiosRequestConfig = {
    method: "get",
    baseURL: `${url}/api`,
    url: 'profiles/random',
  };

  try {
    let { profiles } = (await axios<{ profiles: IProfilePartial[] }>(options)).data
    return profiles
  } catch {
    return []
  }
}


const CvHomePage = () => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState<IProfilePartial[]>([]);

  useEffect(() => {
    // Forzando un delay de 1 segundo para simular una carga mas alta
    setTimeout(() => {
      getProfiles()
        .then(setProfiles)
        .finally(() => setLoading(false))
    }, 3000);
  }, [])

  return (
    < >
      {
        loading
          ? Array(5).fill(null).map((_, i) => <ProfileCardSkeleton key={`profileSkeleton-${i}`} />)
          : Boolean(profiles.length)
            ? profiles.map((profile) => <ProfileCard key={"pCard" + profile.id} profile={profile} />)
            : <> {/* TODO: create page */}
              No hay perfiles creados aun, podrias <Link href={'/cv/crear'}>crear uno</Link>
            </>
      }
    </>
  );
}

export default CvHomePage;

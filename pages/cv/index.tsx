import React, { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { getUrlFromClient } from "@/utils";
import { Box, Fade, SxProps } from "@mui/material";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import Link from "next/link";

const boxSx: SxProps = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 2,
  padding: 1,
}


async function getProfiles(): Promise<IProfilePartial[]> {
  let url = getUrlFromClient()

  const options: AxiosRequestConfig = {
    method: "get",
    baseURL: `${url}/api`,
    url: 'profiles/random',
  };

  try {
    return (await axios<IProfilePartial[]>(options)).data
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
    }, 1000);
  }, [])

  return (
    <Fade in>
      <Box sx={boxSx}>
        {
          loading
          ? Array(5).fill(null).map((_, i) => <ProfileCard key={`profileSkeleton-${i}`} />)
          : profiles.length > 0
            ? profiles.map((profile) => <ProfileCard key={profile.id} profile={profile} />)
            : <> {/* TODO: create page */}
                  No hay perfiles creados aun, podrias <Link href={'/cv/create'}>crear uno</Link>
              </>
        }
      </Box >
    </Fade>
  );
}

export default CvHomePage;

import React, { useEffect, useState } from "react";

import ProfileCard from "@/components/ProfileCard/ProfileCard";
import Link from "next/link";
import ProfileCardSkeleton from "@/components/ProfileCard/ProfileCardSkeleton";
import { getProfiles } from "@/services/profiles.services";



const CvHomePage = () => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState<IProfilePartial[]>([]);

  useEffect(() => {
    // Forzando un delay de 1 segundo para simular una carga mas alta y mostrar el skeleton/loading state
    setTimeout(() => {
      getProfiles()
        .then(setProfiles)
        .finally(() => setLoading(false))
    }, 1000);
  }, [])

  return (
    <div className="row d-flex gap-3 justify-content-center mx-auto">
      {
        loading
          ? Array(5).fill(null).map((_, i) => <ProfileCardSkeleton key={`profileSkeleton-${i}`} />)
          : Boolean(profiles.length)
            ? profiles.map((profile) => <ProfileCard
              key={"pCard" + profile.id}
              avatarProfile={profile}
              header={`${profile.name} ${profile.surname}`}
              body={profile.about}
              footerText="Ver perfil"
              footerLink={`/cv/${profile.alias}`}
            />)
            : <> {/* TODO: create page */}
              No hay perfiles creados aun, podrias <Link href={'/cv/crear'}>crear uno</Link>
            </>
      }
    </div>
  );
}

export default CvHomePage;

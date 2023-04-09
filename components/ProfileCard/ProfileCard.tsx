import React from "react";
import Link from "next/link";

import { ProfileAvatar } from "../ProfileAvatar/ProfileAvatar";

const ProfileCard: React.FC<{ profile?: IProfilePartial }> = ({ profile }) => {
  if (!profile)
    return (
      <div className="card">
        <div>
          <ProfileAvatar height={25} width={25} />
          <h2>Cargando</h2>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet
          dolore quaerat ullam dicta quasi totam sit temporibus eum possimus.
        </div>
        <footer>Ver perfil</footer>
      </div>
    );

  return (
    <div className="col-md-4 overflow-hidden">
      <div className="row d-flex align-items-center justify-content-center">
        <ProfileAvatar
          className="col-2"
          height={25}
          width={25}
          src={profile.photo}
          alt={`Foto de ${profile.name}`}
        />
        <h2 className="col-10 text-center">{`${profile.name} ${profile.surname}`}</h2>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet
        dolore quaerat ullam dicta quasi totam sit temporibus eum possimus.
      </div>

      <div>
        <Link href={`/cv/${profile.alias}`}>Ver perfil</Link>
      </div>
    </div>
  );
};

export default ProfileCard;

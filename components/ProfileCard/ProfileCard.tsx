import React from "react";
import Link from "next/link";

import { PartialProfileAvatar } from "../ProfileAvatar/ProfileAvatar";
import { Card } from "react-bootstrap";


const ProfileCard: React.FC<{ profile?: IProfilePartial }> = ({ profile }) => {
  if (!profile)
    return (
      <Card>
        <Card.Header>
          <h1>Cargando</h1>
        </Card.Header>

        <PartialProfileAvatar />
          

        <Card.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ipsum eum repellat at, hic officiis sint mollitia inventore non est qui quas minus error cumque commodi provident corrupti. Ipsam, veniam!
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card >
    );

  return (
    <Card>
      <Card.Header>
        {`${profile.name} ${profile.surname}`}
      </Card.Header>

      <Card.Img />
        <PartialProfileAvatar profile={profile} />

      <Card.Link href={`/cv/${profile.alias}`}>Ver perfil</Card.Link>
    </Card>
  );
};

export default ProfileCard;

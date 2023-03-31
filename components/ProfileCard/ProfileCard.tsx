import React from "react";
import Link from "next/link";

import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Skeleton,
  SxProps,
} from "@mui/material";
import { PartialProfileAvatar } from "../ProfileAvatar/ProfileAvatar";


const cardSx: SxProps = {
  width: 1,
  maxWidth: {
    sm: 1 / 1.5,
    md: 1 / 3,
    lg: 1 / 4,
  },
  borderRadius: 2,
};

const cardActionSx: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const ProfileCard: React.FC<{ profile?: IProfilePartial }> = ({ profile }) => {
  if (!profile)
    return (
      <Card sx={cardSx}>
        <CardHeader
          avatar={<Skeleton variant="circular" width={40} height={40} />}
          title={<Skeleton variant="text" />}
        />
        <CardActions sx={cardActionSx}>
          <Skeleton variant="rectangular" width={100} height={35} />
        </CardActions>
      </Card>
    );

  return (
    <Card sx={cardSx}>
      <CardHeader
        title={profile.alias}
        avatar={<PartialProfileAvatar profile={profile} />}
      />
      <CardActions sx={cardActionSx}>
        <Button role={"link"}>
          <Link href={`/cv/${profile.id}`}>Visitar perfil</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;

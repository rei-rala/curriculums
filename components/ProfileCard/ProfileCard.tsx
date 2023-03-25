import { Avatar, Button, Card, CardActions, CardHeader,  Skeleton } from "@mui/material";
import Link from "next/link";
import React from "react";


const cardSx = {
  maxWidth: 200,
  minWidth: 200,
}

const cardActionSx = {
  display: 'flex',
  justifyContent: 'center',
}

const ProfileCard: React.FC<{ profile?: IProfilePartial }> = ({ profile }) => {

  if (!profile)
    return (
      <Card sx={cardSx}>
        <CardHeader
          avatar={<Skeleton variant="circular" width={40} height={40} />}
          title={<Skeleton variant="text" />}
        />
        <CardActions
          sx={cardActionSx}
        >
          <Skeleton variant="rectangular" width={100} height={35} />
        </CardActions>
      </Card>
    )

  return (
    <Card sx={cardSx}>
      <CardHeader
        title={profile.alias}
        avatar={profile.photo
          ? <Avatar alt={`Foto de ${profile.alias}`} src="/static/images/avatar/1.jpg" />
          : <Avatar alt={profile.alias}>{profile.alias.charAt(0).toUpperCase() ?? "?"}</Avatar>}
      >
      </CardHeader>
      <CardActions
        sx={cardActionSx}
      >
        <Button>
          <Link href={`/cv/${profile.id}`}>
            Visitar perfil
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProfileCard
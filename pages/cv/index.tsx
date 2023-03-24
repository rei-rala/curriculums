import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, IconButton } from "@mui/material";
import axios, { AxiosRequestConfig } from "axios";
import React from "react";


export async function getServerSideProps() {
  let profiles: ProfilePartial[];

  const options: AxiosRequestConfig = {
    method: "get",
    baseURL: "http://localhost:3000/api/profiles",
    url: 'random',
  };

  try {
    profiles = (await axios<ProfilePartial[]>(options)).data;
  } catch {
    profiles = [];
  }
  return {
    props: {
      profiles,
    },
  };
}

const CvHomePage: ExtendedFC<{ profiles: ProfilePartial[] }> = ({ profiles }) => {

  return <section>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      {
        profiles.map((profile) => (
          <Card
            key={profile.id}
            sx={{
              maxWidth: 200,
              minWidth: 200,
            }}
          >
            <CardHeader
              title={profile.alias}
              avatar={
                profile.photo
                  ? <Avatar alt={`Foto de ${profile.alias}`} src="/static/images/avatar/1.jpg" />
                  : <Avatar alt={profile.alias}>{profile.alias.charAt(0).toUpperCase() ?? "?"}</Avatar>
              }
            >
            </CardHeader>
            <CardActions>
              <Button size="medium">Visitar perfil</Button>
            </CardActions>
          </Card>
        ))

      }
    </Box>
  </section>;
};

export default CvHomePage;

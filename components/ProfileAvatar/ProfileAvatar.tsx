import { Avatar } from "@mui/material";
import React from "react";

const ProfileAvatar = (props: any) => {
  let { profile } = props;

  if (!profile) return <Avatar {...props} />;

  let { contact: { alias }, personal: { photo } } = profile;

  return photo ? (
    <Avatar {...props} src={photo} alt={`Foto de ${profile.contact.alias}`} />
  ) : (
    <Avatar {...props} alt={alias}>
      {alias.charAt(0).toUpperCase() ?? "?"}
    </Avatar>
  );
};

const PartialProfileAvatar = (props: any) => {
  let profile: IProfilePartial | undefined = props.profile;

  if (!profile) return <Avatar {...props} />;

  let { photo, alias } = profile;

  return photo ? (
    <Avatar {...props} src={photo} alt={`Foto de ${alias}`} />
  ) : (
    <Avatar {...props} alt={alias} {...props}>
      {alias.charAt(0).toUpperCase() ?? "?"}
    </Avatar>
  );
};

export { ProfileAvatar, PartialProfileAvatar };

import React from "react";

const BaseAvatar = (props: any) => {
  return <div
    className="rounded-circle border d-flex justify-content-center align-items-center"
    style={{width:"100px", height:"100px"}}
    {...props}
    >
      <i className="fas fa-user-alt fa-3x text-info"></i>
</div>
}


const ProfileAvatar = (props: any) => {
  let { profile } = props;

  if (!profile) return <BaseAvatar {...props} />;

  let { contact: { alias }, personal: { photo } } = profile;

  return photo ? (
    <BaseAvatar {...props} src={photo} alt={`Foto de ${profile.contact.alias}`} />
  ) : (
    <BaseAvatar {...props} alt={alias}>
      {alias.charAt(0).toUpperCase() ?? "?"}
    </BaseAvatar>
  );
};

const PartialProfileAvatar = (props: any) => {
  let profile: IProfilePartial | undefined = props.profile;

  if (!profile) return <BaseAvatar {...props} />;

  let { photo, alias } = profile;

  return photo ? (
    <BaseAvatar {...props} src={photo} alt={`Foto de ${alias}`} />
  ) : (
    <BaseAvatar {...props} alt={alias} {...props}>
      {alias.charAt(0).toUpperCase() ?? "?"}
    </BaseAvatar>
  );
};

export { ProfileAvatar, PartialProfileAvatar };

import React from "react";

const MyProfile = props => {
  return (
    <div>
      <p>Username: XXX</p>
      <p>Gender: Female </p>
      <p> Work: IT Industry </p>
      <p>Website: '{props.match.url}'</p>
    </div>
  );
};

export default MyProfile;

import React from "react";

const MyProfile = props => {
  return (
    <div>
      <p>Username: XXX</p>
      <p>Gender: Female </p>
      <p> Work: IT Industry </p>
      <p>Website: '{props.history.location.pathname}'</p>
    </div>
  );
};

export default MyProfile;

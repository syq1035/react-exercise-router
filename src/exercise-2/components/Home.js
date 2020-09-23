import React from "react";

const Home = props => {
  console.log(props);
  return (
    <div>
      <p>This is a beautiful home page.</p>
      <p>And the url is '{props.history.location.pathname}'</p>
    </div>
  );
};

export default Home;

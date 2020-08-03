import React from "react";

const Country = (props) => {
  const {
    match: {
      params: { id, type, country },
    },
  } = props;

  console.log(props);
  return (
    <div>{country === "network" ? "Network - show" : " moive - country"}</div>
  );
};
export default Country;

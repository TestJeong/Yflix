import React from "react";

const Company = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  console.log(props);
  return <div>{id}</div>;
};

export default Company;

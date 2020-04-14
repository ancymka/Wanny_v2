import React from "react";

import Archive from "../../Components/Archive/Archive";

const Baths = (props) => {
  const renderBath = () => {
    let baths = [];
    baths.push(<Archive index={1} />);
    return <div>{baths}</div>;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "5rem",
      }}
    >
      <container>{renderBath()} </container>
    </div>
  );
};

export default Baths;

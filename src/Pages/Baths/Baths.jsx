import React from "react";
import Bath from "../../Components/Bath/Bath";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "../../config/axios.js";

const Baths = (props) => {
  const [fetchedBaths, setFetchedBaths] = useState();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("bath/", config)
      .then((res) => setFetchedBaths(res.data));
  }, [token]);

  const renderBaths = () => {
    const baths = [];
    if (fetchedBaths) {
      fetchedBaths.forEach((b, i) => {
        baths.push(<Bath key={b.id} index={i + 1} id={b.id} user={b.user} />);
      });
      return <Row>{baths}</Row>;
    } else return <Spinner animation="border" />;
  };

  return (
    <>
      <div>{renderBaths()}</div>
    </>
  );
};

export default Baths;

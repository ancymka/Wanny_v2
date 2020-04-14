import React from "react";
import Stand from "../../Components/Stand/Stand";
import { Row, Spinner } from "react-bootstrap";
import axios from "../../config/axios.js";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Stands = (props) => {
  const [fetchedStands, setFetchedStands] = useState();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("bath/", config)
      .then((res) => setFetchedStands(res.data));
  }, [token]);

  const renderStands = () => {
    const baths = [];
    if (fetchedStands) {
      fetchedStands.forEach((s, i) => {
        baths.push(<Stand key={s.id} index={i + 1} id={s.id} user={s.user} />);
      });
      return <Row>{baths}</Row>;
    } else return <Spinner animation="border" />;
  };

  return <div>{renderStands()}</div>;
};

export default Stands;

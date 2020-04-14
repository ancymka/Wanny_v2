import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const currentTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const loop = setInterval(() => currentTime(), 1000);

    return () => clearInterval(loop);
  }, []);

  return (
    <Button
      variant="outline-first"
      className="text-center align-content-center"
      disabled
    >
      <h6>
        CT:&nbsp;
        {time.toLocaleTimeString()}
      </h6>
    </Button>
  );
};

export default Clock;

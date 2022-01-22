import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center px-5"
      style={{ height: "100vh" }}
    >
      <LinearProgress
        style={{ width: "100%" }}
        variant="determinate"
        value={progress}
      />
    </div>
  );
}
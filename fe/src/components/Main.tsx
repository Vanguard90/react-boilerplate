import React, { useState, useEffect } from "react";
import RepositoryService from "../service/repository-service";

export default function Main(): JSX.Element {
  const [testId, setTestId] = useState(null);

  useEffect(() => {
    RepositoryService.getVideo(5)
      .then(response => {
        setTestId(response.result);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <p>Selected test Id is:</p>
      {testId && <p> {testId} </p>}
    </div>
  );
}

import React, { useEffect } from "react";
import { getServices } from "./api";

function TestAPI() {

  useEffect(() => {

    getServices()
      .then((data) => {
        console.log("DJANGO BACKEND RESPONSE:", data);
      })
      .catch((error) => {
        console.log("BACKEND ERROR:", error);
      });

  }, []);

  return null;
}

export default TestAPI;
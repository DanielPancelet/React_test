import {useEffect} from "react";
import Bugsnag from "@bugsnag/js";

const existingFunction = () => {
  console.log("This is the existing function.");
};
export function ComponentB() {
  useEffect(() => {
    try {
      existngFunction();
    } catch (error) {
      console.error("Error caught in ComponentB:", error);
      //throw error;
      Bugsnag.notify(error);
    }
  }, []);
  return (
    <div>
      <h2>Component B</h2>
      <p>This will trigger an error on mount due to a typo in the function name.</p>
    </div>
  );
};

import Bugsnag from "@bugsnag/js";

export function ComponentA() {

  const errorFunction = () => {
      try{
    let undefinedVar;
    return undefinedVar.trim();
    } catch (e) {
          console.error("Error caught in ComponentA:", e);
          Bugsnag.notify(e);
      }
  };

  return (
    <div>
      <h2>Component A</h2>
      <button onClick={errorFunction}>Trigger Error in A</button>
    </div>
  );
};

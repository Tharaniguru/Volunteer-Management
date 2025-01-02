import React, { useMemo, useState } from "react";

var SlowFunction = (number) => {
  for (let i = 0; i < 1; i++) {}
  return number * 2;
};

const UseMemo = () => {
  var [num, setNum] = useState(0);

  var [theme, updateTheme] = useState(true);

  var SetMode = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };

  var doublingANumber = useMemo(() => {
    return SlowFunction(num);
  }, [num]);
  return (
    <div>
      <h1>This is use memo</h1>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => updateTheme((theme = !theme))}>
        ToggleTheme{" "}
      </button>

      <h2 style={SetMode}>{doublingANumber}</h2>
    </div>
  );
};

export default UseMemo;

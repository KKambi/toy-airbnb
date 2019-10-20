import React from "react";

const a = () => {
  return 2;
}

function FilterBar({ favorite }) {
  return (
    <div>
      <h1>Filter Bar</h1>
      <h2>{favorite}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      hello!
      <FilterBar favorite="kimchi" arr={[1, 2, 3]} foo />
    </div>
  );
}

export default A;

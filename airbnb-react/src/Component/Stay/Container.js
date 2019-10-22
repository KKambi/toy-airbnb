import React, { useState, useEffect } from 'react';
import NumberBar from './NumberBar';
import Node from './Node/Node';
import utilFetch from '../../util/utilFetch';

function Container() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await utilFetch.getData('/api/stays/all');
      setStays(res.data);
    }
    fetchData();
  });

  return (
    <div>
      <h1>Container</h1>
      <NumberBar />
      {stays.map((stay) => <Node key={stay.id} stay={stay} />)}
    </div>
  );
}

export default Container;

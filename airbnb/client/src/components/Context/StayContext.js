import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import utilFetch from '../../utils/utilFetch';

const Context = createContext();
const { Provider, Consumer: StayConsumer } = Context;

function StayProvider(props) {
  const [stays, setStays] = useState([]);
  const [stayCount, setStayCount] = useState(0);

  useEffect(() => {
    const getInitialStays = async () => {
      const res = await utilFetch.getData('/api/stays/all');
      setStays(res.data.rows);
      setStayCount(res.data.count);
    };
    getInitialStays();
  }, []);

  const filterStay = async (guest) => {
    const res = await utilFetch.getData(`/api/stays/filter?guest=${guest}`);
    setStays(res.data.rows);
    setStayCount(res.data.count);
  };

  const value = {
    stays,
    setStays,
    stayCount,
    setStayCount,
    filterStay,
  };
  const { children } = props;
  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
}

StayProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  StayProvider,
  StayConsumer,
};

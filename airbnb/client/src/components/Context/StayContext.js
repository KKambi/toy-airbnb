/* eslint-disable no-restricted-syntax */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import utilFetch from '../../utils/utilFetch';

const Context = createContext();
const { Provider, Consumer: StayConsumer } = Context;

function StayProvider(props) {
  const [stays, setStays] = useState([]);
  const [stayCount, setStayCount] = useState(0);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const getInitialStays = async () => {
      const res = await utilFetch.getData('/api/stays/all');
      setStays(res.data.rows);
      setStayCount(res.data.count);
    };
    getInitialStays();
  }, []);

  const makeQuery = (currFilter) => {
    let query = '';
    for (const [key, value] of Object.entries(currFilter)) {
      query += `${key}=${value}&`;
    }
    return query.slice(0, query.length - 1);
  };

  const filterStay = async () => {
    const query = makeQuery(filter);
    const res = await utilFetch.getData(`/api/stays/filter?${query}`);
    setStays(res.data.rows);
    setStayCount(res.data.count);
  };

  const addFilter = (obj) => {
    setFilter(Object.assign(filter, obj));
    filterStay();
  };

  const value = {
    stays,
    setStays,
    stayCount,
    setStayCount,
    filterStay,
    addFilter,
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

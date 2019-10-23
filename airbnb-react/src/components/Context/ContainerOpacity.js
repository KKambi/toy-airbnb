import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();
const { Provider, Consumer: OpacityConsumer } = Context;

function OpacityProvider(props) {
  const [stayOpacity, setStayOpacity] = useState(1);

  const toggleOpacity = () => {
    const opacity = (stayOpacity === 1 ? 0.4 : 1);
    setStayOpacity(opacity);
  };

  const value = { stayOpacity, toggleOpacity };
  const { children } = props;
  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
}

OpacityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  OpacityProvider,
  OpacityConsumer,
};

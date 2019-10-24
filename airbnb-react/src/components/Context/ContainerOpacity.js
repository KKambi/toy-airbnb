import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();
const { Provider, Consumer: OpacityConsumer } = Context;

function OpacityProvider(props) {
  const [stayOpacity, setStayOpacity] = useState(1);

  const setOpacityCloudy = () => {
    if (stayOpacity === 1) {
      setStayOpacity(0.4);
    }
  };

  const setOpacityClear = () => {
    if (stayOpacity === 0.4) {
      setStayOpacity(1);
    }
  };

  const actions = {
    setOpacityCloudy,
    setOpacityClear,
  };

  const value = { stayOpacity, actions };
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

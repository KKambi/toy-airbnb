import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const OpacityContext = createContext();

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

  const stayOpacityHandler = {
    setOpacityCloudy,
    setOpacityClear,
  };

  const value = { stayOpacity, stayOpacityHandler };
  const { children } = props;
  return (
    <OpacityContext.Provider value={value}>
      {children}
    </OpacityContext.Provider>
  );
}

OpacityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  OpacityProvider,
  OpacityContext,
};

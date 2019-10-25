import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
    padding: theme.spacing(3),
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const CustomizedPaper = withStyles({
  root: {
    boxShadow: 'none',
  },
})(Paper);

const CustomizedSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus,&:hover,&$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbSlider(props) {
  const { minPrice, maxPrice, priceHandler } = props;
  const { setMinPrice, setMaxPrice } = priceHandler;
  const classes = useStyles();

  const changePrice = (event, value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  return (
    <CustomizedPaper className={classes.root}>
      <CustomizedSlider
        onChange={changePrice}
        getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
        value={[minPrice, maxPrice]}
        min={10000}
        max={300000}
      />
    </CustomizedPaper>
  );
}

AirbnbSlider.propTypes = {
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  priceHandler: PropTypes.shape({
    setMinPrice: PropTypes.func.isRequired,
    setMaxPrice: PropTypes.func.isRequired,
  }).isRequired,
};

export default AirbnbSlider;

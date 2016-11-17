import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h3>{this.props.hasWatermark}</h3>
        <h4>{this.props.color}</h4>
        <h5>{this.props.weight}</h5>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}
var range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

Product.propTypes = {

  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: React.PropTypes.oneOf(range(80, 300)).isRequired
}

module.exports= Product;

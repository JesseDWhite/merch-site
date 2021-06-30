import React from "react";
import PropTypes from "prop-types"

function Item(props) {

  return (
    <React.Fragment>
      <img src={prop.name + ".jpg"} alt="A beautiful item" />
      <h3>Brand new {props.name}</h3>
      <h2>this a {props.description}</h2>
      <p><em>how many left:{props.quantity}</em></p>
      <hr />
    </React.Fragment>
  );
}
// this is how you declare a prop type
Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default Item;

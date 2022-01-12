import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { render } from "@testing-library/react";


class Defense extends Component {
    constructor() {
        super();
        this.state = {};
    }

render() {
  const { name, type } = this.props;
  return (
    <div>
      <div>
        {name}
      </div>
      <div>
      </div>

    </div>
  );
}
}

export default Defense;

import React, { Component } from "react";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core";
// import PropTypes from "prop-types";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 50px;
`;

class AwesomeComponent extends Component {
  state = {
    loading: true
  };
  render() {
    return (
      <div className="sweet-loading">
        <BarLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={"#b3a4d6"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default AwesomeComponent;

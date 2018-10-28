import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';

const debug = Debug('fabnavi:components:ProcessVisualizer');

export default class ProcessVisualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>hoge</p>
      </div>
    );
  }
}

ProcessVisualizer.propTypes = {};

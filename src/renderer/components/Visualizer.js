import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';
import Konva from 'konva';
import { Stage, Layer, Text } from 'react-konva';

import ProcessVisualizer from './Visualize/ProcessVisualizer';
import { PageFrame } from '../stylesheets/visualizer/Visualizer';

const debug = Debug('fabnavi:components:Visualizer');

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageFrame>
        <ProcessVisualizer />
      </PageFrame>
    );
  }
}

Visualizer.propTypes = {};

export default connect(
  null,
  null
)(Visualizer);

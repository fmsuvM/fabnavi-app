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
        <ProcessVisualizer project={this.props.project} />
      </PageFrame>
    );
  }
}

Visualizer.propTypes = {
  project: PropTypes.object
};

const mapStateToProps = state => ({
  project: state.player.project
});

export default connect(
  mapStateToProps,
  null
)(Visualizer);

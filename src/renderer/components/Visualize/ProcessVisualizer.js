import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';
import { Stage, Layer, Text, Group } from 'react-konva';

const debug = Debug('fabnavi:components:ProcessVisualizer');

export default class ProcessVisualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Visual Player" fontSize={15} />
        </Layer>
      </Stage>
    );
  }
}

ProcessVisualizer.propTypes = {
  children: PropTypes.string
};

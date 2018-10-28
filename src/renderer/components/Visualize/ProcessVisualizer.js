import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';
import { Stage, Layer, Text, Group, Circle, Line } from 'react-konva';

import { VisualizeFrame } from '../../stylesheets/visualizer/ProcessVisualizer';

const debug = Debug('fabnavi:components:ProcessVisualizer');
const start = 50;
const end = window.innerWidth - 100;

export default class ProcessVisualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const project = this.props.project;
    /**
     * left margin ... 50px
     * right margin ... 50px
     */
    const step = project.content.length;
    return (
      <VisualizeFrame>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Line x={0} y={0} stroke="red" points={[0, 100, end, 100]} />
            {project.content.map((_content, index) => {
              return (
                // TODO:
                // <Circle key={index} fill="#ff0000" x={start + index * (end / (step - 1))} y={100} radius={20} />
                <DrawNode key={index} index={index} step={step} contents={_content} />
              );
            })}
          </Layer>
        </Stage>
      </VisualizeFrame>
    );
  }
}

const DrawNode = ({ index, step, contents }) => {
  const xpos = Number(start + index * (end / (step - 1)));
  return <Circle fill="#00ff00" x={xpos} y={Number(100)} radius={Number(25)} />;
};

ProcessVisualizer.propTypes = {
  children: PropTypes.string,
  project: PropTypes.object
};

DrawNode.propTypes = {
  index: PropTypes.number,
  step: PropTypes.number,
  contents: PropTypes.object
};

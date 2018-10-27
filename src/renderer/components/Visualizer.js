import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';

const debug = Debug('fabnavi:components:Visualizer');

class Visualizer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>visualize page</div>;
    }
}

Visualizer.propTypes = {};

export default connect(
    null,
    null
)(Visualizer);

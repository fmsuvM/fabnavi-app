import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';
import { push } from 'react-router-redux';
import Player from './Player';
import DeleteModal from '../components/DeleteModal';

import { sanitizeProject } from '../utils/projectUtils';
import { assetsPath } from '../utils/assetsUtils';
import { closeDeleteConfirmation, deleteProject, confirmDeleteProject } from '../actions/manager';

import {
    StyledDetailFrame,
    ProjectTitle,
    ContentsFrame,
    DescriptionFrame,
    StyledHead,
    StyledDescription,
    StatusFrame,
    StatusText
} from '../stylesheets/application/ProjectShow/StyledProjectDetail';

const debug = Debug('fabnavi:jsx:ProjectDetail');

export class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);
        this.selectAction = mode => {
            if(this.props.project) {
                this.props.selectAction(this.props.project.id, mode);
            }
        };
        this.closeDeleteConfirmation = () => {
            this.props.closeDeleteConfirmation();
        };
        this.onDeleteProject = projectId => {
            this.props._deleteProject(projectId);
        };
    }

    render() {
        if(!this.props.project) return <div />;
        const project = sanitizeProject(this.props.project);
        const isEditable = this.props.userIsAdmin || project.user.id === this.props.userId;
        const isDeletable = project.user.id === this.props.userId
        return (
            <div>
                {project ? (
                    <StyledDetailFrame>
                        <ProjectTitle>{project.name}</ProjectTitle>
                        <Player />
                        <ContentsFrame>
                            <DescriptionFrame>
                                <StyledHead>Description</StyledHead>
                                <StyledDescription>{project.description}</StyledDescription>
                            </DescriptionFrame>
                            <StatusFrame>
                                <StyledHead>Project Author</StyledHead>
                                <StatusText>{project.user.nickname}</StatusText>
                                <StyledHead>Project Date</StyledHead>
                                <StatusText>{project.date}</StatusText>
                            </StatusFrame>
                        </ContentsFrame>
                        {isEditable ? (
                            <ActionIcon actionName="edit" handleClick={this.selectAction} />
                        ) : null}
                        {isDeletable ? (
                            <ActionIcon actionName="delete" handleClick={this.selectAction} />
                        ) : null}
                        {this.props.showDeleteConfirmation ? <DeleteModal /> : <span />}
                    </StyledDetailFrame>
                ) : (
                    <div> loading project... </div>
                )}
            </div>
        );
    }
}

const ActionIcon = ({ actionName, handleClick }) => {
    return (
        <div onClick={() => handleClick(actionName)}>
            <img src={`${assetsPath}/images/p_${actionName}.png`} />
            <span> {actionName} </span>
        </div>
    );
};

ProjectDetail.propTypes = {
    project: PropTypes.object,
    userId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    userIsAdmin: PropTypes.bool,
    selectAction: PropTypes.func,
    showDeleteConfirmation: PropTypes.bool,
    closeDeleteConfirmation: PropTypes.func,
    _deleteProject: PropTypes.func,
    targetProject: PropTypes.number
};

export const mapStateToProps = state => ({
    project: state.manager.targetProject,
    userId: state.user.id,
    userIsAdmin: state.user.isAdmin,
    showDeleteConfirmation: state.modals.showDeleteConfirmation,
    targetProject: state.modals.targetProject
});

export const mapDispatchToProps = dispatch => ({
    selectAction: (projectId, mode) => {
        if(mode === 'delete') {
            dispatch(confirmDeleteProject(projectId));
        } else {
            dispatch(push(`/${mode}/${projectId}`));
        }
    },
    closeDeleteConfirmation: () => dispatch(closeDeleteConfirmation()),
    _deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectDetail);

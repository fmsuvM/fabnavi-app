import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Debug from 'debug';
import { push } from 'react-router-redux';

import Player from './Player';
import DeleteModal from '../components/DeleteModal';
import CaptionList from './CaptionList';

import { sanitizeProject } from '../utils/projectUtils';

import {
    StyledDetailFrame,
    ProjectTitle,
    ContentsFrame,
    DescriptionFrame,
    StyledHead,
    StyledDescription,
    StatusFrame,
    StatusText,
    PrivateNotation,
    TagFrame,
    TagHeader,
    TagField,
    StyledTagName
} from '../stylesheets/application/ProjectShow/StyledProjectDetail';

const debug = Debug('fabnavi:jsx:ProjectDetail');

export class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);

        this.jumpVisualizeProject = () => {
            if(this.props.project)this.props.visualizeProject(this.props.projectId);
        };
    }

    render() {
        if(!this.props.project) return <div />;
        const project = sanitizeProject(this.props.project);
        const isPrivate = project.private;
        const tags = project.tags.tags;
        const isTag = tags.length > 0 ? true : false;
        return (
            <div>
                {project ? (
                    <StyledDetailFrame>
                        <ProjectTitle lang="ja">
                            {project.name} {isPrivate && <PrivateNotation>Private Project</PrivateNotation>}
                        </ProjectTitle>
                        <TagFrame>
                            <TagHeader>Tag: </TagHeader>
                            <TagField>
                                {isTag ? (
                                    tags.map((tag, index) => {
                                        return <StyledTagName key={index}>{tag.name}</StyledTagName>;
                                    })
                                ) : (
                                    <TagHeader>none</TagHeader>
                                )}
                            </TagField>
                        </TagFrame>
                        <Player />
                        <ContentsFrame>
                            <DescriptionFrame>
                                <StyledHead>Description</StyledHead>
                                <StyledDescription>{project.description}</StyledDescription>
                            </DescriptionFrame>
                            <StatusFrame>
                                <StyledHead>Author</StyledHead>
                                <StatusText>{project.user.nickname}</StatusText>
                                <StyledHead>Created Date</StyledHead>
                                <StatusText>{project.date}</StatusText>
                            </StatusFrame>
                        </ContentsFrame>
                        <CaptionList
                            figures={project.content
                                .map(content => content.figure)
                                .sort((fig1, fig2) => fig1.position - fig2.position)}
                            contentType={this.props.contentType}
                        />
                        <div onClick={this.jumpVisualizeProject}>Jump !!</div>
                        {this.props.showDeleteConfirmation ? <DeleteModal /> : <span />}
                    </StyledDetailFrame>
                ) : (
                    <div> loading project... </div>
                )}
            </div>
        );
    }
}

ProjectDetail.propTypes = {
    project: PropTypes.object,
    userId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    userIsAdmin: PropTypes.bool,
    showDeleteConfirmation: PropTypes.bool,
    targetProject: PropTypes.number,
    contentType: PropTypes.string,
    visualizeProject: PropTypes.func
};

const mapStateToProps = state => ({
    project: state.manager.targetProject,
    userId: state.user.id,
    userIsAdmin: state.user.isAdmin,
    showDeleteConfirmation: state.modals.showDeleteConfirmation,
    targetProject: state.modals.targetProject,
    contentType: state.player.contentType
});

const mapDispatchToProps = dispatch => ({
    visualizeProject: projectId => {
        dispatch(push(`/visualizer/${projectId}`));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectDetail);

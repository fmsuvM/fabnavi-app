import styled, { css } from 'styled-components';

import { assetsPath } from '../../../utils/assetsUtils'

const photoLabelURL = `${assetsPath}/images/PhotoLabel.png`;
const videoLabelURL = `${assetsPath}/images/VideoLabel.png`;
const cardPhotoLabelURL = `${assetsPath}/images/CardPhotoLabel.png`;
const cardVideoLabelURL = `${assetsPath}/images/CardVideoLabel.png`;

export const ProjectFrame = styled.div`
    z-index: 0;
    margin-left: ${props => props.index % 4 === 0 ? '0px' : '20px'};
    margin-right: ${props => props.index % 4 === 3 ? '0px' : '20px'};
    margin-bottom: ${props => props.index < 4 ? '27px' : '0px'};
    position: relative;
    width: 300px;
    height: 360px;
    box-sizing: border-box;
    border: 1px solid #999999;
    border-radius: 8px;
    box-shadow: none;
`;

export const PrivateLabel = styled.img`
    z-index: 1;
    position: absolute;
    top: -1.55px;
    right: -2px;
`;

export const ProjectTypeLabel = styled.img.attrs({
    src: props => (props.type === 'Photo' ? photoLabelURL : videoLabelURL)
})`
    z-index: 3;
    position: absolute;
    opacity: 0;
    top: 0%;
    right: 0%;
    transition: 0.2s ease-in-out;

    &:hover {
        opacity: 1;
    }
`;

export const CardProjectTypeLabel = styled.img.attrs({
    src: props => (props.type === 'Photo' ? cardPhotoLabelURL : cardVideoLabelURL)
})`
    margin-left: auto;
    margin-right: 18px;
`;

export const InsideFrame = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProjectThumb = styled.div`
    width: 298px;
    height: 167px;
    margin: 0 auto;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        border-radius: 7px 7px 0 0;
    }
`;

export const ProjectTitle = styled.p`
    position: relative;
    overflow: hidden;
    line-height: 1.25em;
    font-feature-settings: 'palt';
    font-weight: 700;
    width: 280px;
    height: 55px;
    font-size: 24px;
    margin: 0px;
    margin-top: 13px;
    margin-bottom: 15px;
    margin-left: 12px;
    color: #000000;
    line-break: strict;
    word-break: break-word;

    &:before {
        position: absolute;
        background: #fff;
        content: '...';
        bottom: 0;
        right: 0;
    }

    &:after {
        position: absolute;
        background: #fff;
        content: '';
        width: 100%;
        height: 100%;
    }
`;

export const ProjectDescription = styled.p`
    position: relative;
    overflow: hidden;
    line-height: 22px;
    font-weight: 700;
    width: 270px;
    height: 45px;
    font-size: 18px;
    margin: 0px;
    margin-left: 12px;
    margin-bottom: 15px;
    color: #000000;
    word-break: break-all;

    &:before {
        position: absolute;
        background: #fff;
        content: '...';
        bottom: 0;
        right: 0;
    }

    &:after {
        position: absolute;
        background: #fff;
        content: '';
        width: 100%;
        height: 100%;
    }
`;
export const StatusFrame = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 12px;
    align-items: center;
`;
export const ProjectUser = styled.img`
    width: 36px;
    height: 36px;
    margin: 0;

    ${props =>
        props.user ?
            css`
                  border-radius: 100%;
              ` :
            css`
                  margin-left: 10px;
              `};
`;

export const UserStatusFrame = styled.div`
    display: flex;
    flex-direction: column;
    width: 93px;
    height: 30px;
    margin-left: 12px;
`;

export const UserName = styled.p`
    font-weight: 700;
    font-size: 18px;
    color: #000;
    margin: 0px;
    margin-left: 10px;
`;

export const ProjectDate = styled.p`
    font-size: 12px;
    color: #555555;
    margin: 0px;
    margin-top: 5px;
`;

export const ProjectMenu = styled.div`
    position: absolute;
    width: 300px;
    top: 0;
`;

export const MenuColmun = styled.div`
    background-color: rgba(125, 125, 125, 0.5);
    &:hover {
        background-color: rgba(60, 60, 60, 0.5);
    }
    &:first-child {
        border-radius: 7px 7px 0 0;
    }
`;

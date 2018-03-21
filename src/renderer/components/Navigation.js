import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Debug from 'debug';
import { connect } from 'react-redux';

import MenuIcon from './MenuIcon';
import BackButton from './BackButton';
import SearchBar from './SearchBar';

const debug = Debug('fabnavi:jsx:Navigation');
import { assetsPath } from '../utils/assetsUtils';

const Navigation = (props) => (
    <div>
        <style jsx>{`
            nav {
                padding-bottom: 15px;
                height: 50px;
                display: flex;
            }
            .logo {
                display: inline-block;
                padding-top: 20px;
            }
            img {
                padding-top: 20px;
                width: 200px;
                height: 100%;
            }
            hr{
                width: 100%;
                border: 0;
                border-bottom: 1px dashed #ccc;
                background: #fff;
            }
            .menu {
                display: flex;
            }
        `}</style>
        <nav>
            <Link className="logo" to="/" >
                <img src={`${assetsPath}/images/logo.png`} />
            </Link>
            {
                props.isLoggedIn ?
                    <div className="menu">
                        <BackButton />
                        <MenuIcon to="/" src={`${assetsPath}/images/home-icon.png`} />
                        <MenuIcon to="myprojects" src={`${assetsPath}/images/myproject.png`} />
                        <MenuIcon act="sign_out" src={`${assetsPath}/images/sign-out.png`} />
                        <MenuIcon className="help" to="/help" src={`${assetsPath}/images/help.png`} />
                        <MenuIcon className="working-mode" to="/workspace" src={`${assetsPath}/images/working-mode.png`} />
                        <SearchBar />
                    </div> :
                    <div className="menu">
                        <BackButton />
                        <MenuIcon to="/" src={`${assetsPath}/images/home-icon.png`} />
                        <MenuIcon className="help" to="/help" src={`${assetsPath}/images/help.png`} />
                        <MenuIcon act="sign_in" src={`${assetsPath}/images/sign-in.png`} />
                        <MenuIcon className="working-mode" to="/workspace" src={`${assetsPath}/images/working-mode.png`} />
                        <SearchBar />
                    </div>
            }
        </nav>
        <hr />
    </div>
);

Navigation.propTypes = {
    isLoggedIn: PropTypes.bool
};

const mapStateToProps = (state) => (
    {
        isLoggedIn: state.user.isLoggedIn
    }
);

export default connect(mapStateToProps)(Navigation);
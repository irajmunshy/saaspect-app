import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEllipsisV, faBars } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';


const Sidebar = ({handleToggle, hide, toggle}) => {
    return (
        <div className="sidebar-area" style={!hide ? {boxShadow: '0 0 7px 1px gray'} : {boxShadow: 'none'}}>
            {!hide &&
                <div className="toggle-area mb-3">
                    <h5>View Toggle</h5>

                    <div className="toggle">
                        <p style={toggle === 'posts' ? {background: '#98EEC8'} : {background: '#D9E1E8'}} onClick={() => handleToggle('posts')}><FontAwesomeIcon className="active" icon={faAddressCard} /></p>
                        <p style={toggle === 'feedbacks' ? {background: '#98EEC8'} : {background: '#D9E1E8'}} onClick={() => handleToggle('feedbacks')}><FontAwesomeIcon icon={faBars} /></p>
                    </div>
                </div>
            } 

            <div className="feedback-area">
                <h5>Have a Feedback?</h5>
                <button onClick={() => handleToggle('feedbackPage', hide == true ? false : true )} style={!hide ? {background: '#98EEC8'} : {background: '#ECA4A7'}} className="btn">We're Listening!</button>
            </div>
        </div>
    );
};

export default Sidebar;
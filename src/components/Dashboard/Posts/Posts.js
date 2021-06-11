import React from 'react';
import './Posts.css';
import img from '../../../images/office.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Posts = ({newsed}) => {
    return (
        <div className="news-area">
            <div className="row">
                {
                    newsed.map(news => (
                        <div className="col-md-4">
                            <div className="news-info mb-4">
                                <h6>{news.title.length > 49 ? news.title.slice(0, 49) : news.title}...</h6>
                                <small className="summary">{news.summary.length > 49 ? news.summary.slice(0, 49) : news.summary}...</small>
                                <p>{news.published}</p>
                                <img src={img} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="d-flex justify-content-center breadcrumb">
                <p className="active">1</p>
                <p>2</p>
                <p>3</p>
                <p><FontAwesomeIcon icon={faAngleDoubleRight} /> </p>
            </div>
        </div>
    );
};

export default Posts;
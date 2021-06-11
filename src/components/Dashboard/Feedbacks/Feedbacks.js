import React from 'react';
import img from '../../../images/office.jpg';
import './Feedbacks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Feedbacks = ({newsed}) => {
    return (
        <div className="mx-4 mt-5">
            <div className="row">
                {
                    newsed.map(news => (
                        <div className="d-flex justify-content-center">
                            <div className="col-md-11">
                                <div className="d-flex align-item-center feedbacks-area py-2 px-4 mb-3">
                                    <img src={img} alt="" />

                                    <div className="info">
                                        <h6>{news.title.length > 100 ? news.title.slice(0, 99) : news.title }</h6>
                                        <p className="m-0 p-0">{news.summary.length > 100 ? news.summary.slice(0, 99) : news.summary }</p>
                                        <p className="m-0 p-0">{news.published}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-1">
                                <div className="pt-4">
                                    <p className="closeIcon"><FontAwesomeIcon icon={faTimes} /></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="d-flex mt-4 justify-content-center breadcrumb">
                <p className="active">1</p>
                <p>2</p>
                <p>3</p>
                <p><FontAwesomeIcon icon={faAngleDoubleRight} /> </p>
            </div>
        </div>
    );
};

export default Feedbacks;
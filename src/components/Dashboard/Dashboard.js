import React, {useEffect, useState} from 'react';
import FeedbackPage from './FeedbackPage/FeedbackPage';
import Feedbacks from './Feedbacks/Feedbacks';
import Posts from './Posts/Posts';
import Sidebar from './Sidebar/Sidebar';
import { useHistory } from 'react-router';

const Dashboard = () => {
    const [newsed, setNewsed] = useState([]);
    const [toggle, setToggle] = useState('posts');
    const [hide, setHide] = useState(false);
    const history = useHistory();

    useEffect(() => {
        fetch('https://api.first.org/data/v1/news')
            .then(res => res.json())
            .then(data => setNewsed(data.data))
    }, [])
    console.log(newsed)

    const handleToggle = (path, hideValue) => {
        if (path === 'feedbackPage') {
            history.push('/dashboard/feedback');
        }
        else if (path === 'feedbacks') {
            history.push('/dashboard/horizontalNews');
        } else { 
            history.push('/dashboard/verticalNews');
        }
        
        setToggle(path);
        setHide(hideValue);
    }

    return (
        <div className="container-fluid" style={{background: '#EAF1F6'}}>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar handleToggle={handleToggle} hide={hide} toggle={toggle} />
                </div>

                <div className="col-md-9">
                    {
                        toggle === 'feedbacks' ? <Feedbacks newsed={newsed.slice(0, 5)} /> :
                        toggle === 'feedbackPage' && hide ? <FeedbackPage /> : <Posts newsed={newsed.slice(0, 6)} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
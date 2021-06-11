import React from 'react';
import './FeedbackPage.css';
import { useForm } from "react-hook-form";

const FeedbackPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="feedbackPage-area mt-4 me-5 pe-4">
            <div className="mb-4">
                <h2 className="p-0 m-0">Thank you so much for talking the time!</h2>
                <p className="p-0 m-0">Please Provide the below details!</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">First Name:</label><br />
                    <input className="form-control w-50 mb-2" placeholder="John" type="text" {...register("firstName")} required />
                </div>

                <div>
                    <label htmlFor="">Last Name:</label><br />
                    <input className="form-control w-50 mb-2" placeholder="Doe" type="text" {...register("lastName")} required />
                </div>

                <div>
                    <label htmlFor="">Address:</label><br />
                    <textarea className="form-control mb-2" {...register("address")} required placeholder="Enter your full Postal Address" id="" cols="115" rows="5"></textarea>
                </div>
                
                <div>
                    <label htmlFor="">Country:</label><br />
                    <input className="form-control w-50 mb-2" placeholder="India" type="text" {...register("country")} required />
                </div>

                <div>
                    <label htmlFor="">Email ID:</label><br />
                    <input className="form-control w-50 mb-2" placeholder="example@sample.com" type="email" {...register("email")} required />
                </div>

                <div>
                    <label htmlFor="">Phone Number:</label><br />
                    <input className="form-control w-50 mb-2" placeholder="+91123456789" type="tel" {...register("phone")} required />
                </div>
                
                <input type="submit" className=" submitBtn" value="Submit Feedback" />
            </form>
        </div>
    );
};

export default FeedbackPage;
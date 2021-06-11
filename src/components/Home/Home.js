import React from 'react';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="mx-3 blog-container">
                            <h4>First Blog</h4>

                            <div className="px-3 blog-info">
                                <p><strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Quibusdam error ad minus voluptate voluptatum praesentium perferendis, totam excepturi, aperiam atque, vel debitis? Voluptatibus laborum explicabo sit! Sunt veritatis quo non officia optio voluptatibus quibusdam dolores, in libero quia! Quasi aliquid id quis eum <a href="/">atque earum possimus commodi quod deleniti natus.</a></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero totam nobis recusandae minus incidunt modi architecto? Dignissimos dolorem, rerum soluta quaerat dicta fuga recusandae quidem sapiente, nemo atque reprehenderit illum labore! Inventore quibusdam veritatis tenetur omnis dolorem labore voluptas!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="main-container">
                            <h2 className="mb-0 pb-0">Thank You FIRST Community for Helping Team Cymru Reach a New CSIRT Assistance Program Milestone</h2>
                            <p>Together, We're Creating Butter Theat inielligence for the werts.</p>
                        
                            <div>
                                <p className="pb-0 mb-0">by jacomo piccolini. Outreach Team Lead, Team Cymnu</p>
                                <p>Monday, Janury 25th 2020</p>
                            </div>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse eligendi, accusantium commodi enim in qui temporibus labore porro atque reiciendis sit eos. Enim ducimus iste officiis sunt magnam neque placeat odio perspiciatis beatae quis minus quos deleniti iusto facere maiores, temporibus sint dolorem dolor, nemo nam inventore doloribus ipsa at? Impedit repudiandae velit nemo officiis consequatur iure placeat, dicta fugiat eveniet culpa eligendi minus, consectetur nihil minima reiciendis cupiditate veniam hic! Sapiente tenetur deleniti provident repellendus excepturi consequuntur! Ducimus?</p>
                            
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse eligendi, accusantium commodi enim in qui temporibus labore porro atque reiciendis sit eos. Enim ducimus iste officiis sunt magnam neque placeat odio perspiciatis beatae quis minus quos deleniti iusto facere maiores, temporibus sint dolorem dolor, nemo nam inventore doloribus ipsa at? Impedit repudiandae velit nemo officiis consequatur iure placeat, dicta fugiat eveniet culpa eligendi minus, consectetur nihil minima reiciendis cupiditate veniam hic! Sapiente tenetur deleniti provident repellendus excepturi consequuntur! Ducimus?</p>
                            
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse eligendi, accusantium commodi enim in qui temporibus labore porro atque reiciendis sit eos. Enim ducimus iste officiis sunt magnam neque placeat odio perspiciatis beatae quis minus quos deleniti iusto facere maiores, temporibus sint dolorem dolor, nemo nam inventore doloribus ipsa at? Impedit repudiandae velit nemo officiis consequatur iure placeat, dicta fugiat eveniet culpa eligendi minus, consectetur nihil minima reiciendis cupiditate veniam hic! Sapiente tenetur deleniti provident repellendus excepturi consequuntur! Ducimus?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
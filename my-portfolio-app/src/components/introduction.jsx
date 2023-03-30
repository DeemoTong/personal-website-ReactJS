import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
                <ul className="slides">
                
                <li style={{backgroundImage: 'url()'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                            <h1>Hi! <br />I'm Meemo</h1>
                            <h2>I'm a versatile Full Stack Engineer with expertise in .NET, Java, and ReactJS, passionate about electronics research and gaming.</h2>
                            <p><a className="btn btn-primary btn-learn" href="https://1drv.ms/b/s!AooqoBuwuGvdkrolnOHa_ZEpZjoASg?e=a89l71" target="_blank">Download CV <em className="icon-download4" /></a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                <li style={{backgroundImage: 'url()'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner">
                            <div className="desc">
                            <h1>I am <br />a Developer</h1>
                            <p><a className="btn btn-primary btn-learn" href="https://github.com/DeemoTong" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
        </section>
      </div>
    )
  }
}
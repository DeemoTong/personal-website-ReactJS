import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Engineer at <a href="https://www.createstudios.com.au/">Createstudios</a><span> 2022-present</span></h2>
                        <ul>
                          <li><p>Develop and build the backend and API implementation mainly based on .NET</p></li>
                          <li><p>Develop and build frontends with HTML5, JavaScript, JQuery, Vue.js and Sass or LESS at their core</p></li>
                          <li><p>Project experience includes building shopping carts for companies that focus on online courses, adding courses, payment systems, and online course reservations.</p></li>
                          <li><p>Build an infrastructure with IIS as the server and SQL Server database as the Web Application</p></li>
                          <li><p>Manage, build and continuously update CMS platforms, mainly Kentico 11, Kentico 12, Craft CMS, etc.</p></li>
                          <li><p>Optimize website performance and user experience according to customer needs</p></li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Application Engineer at <a href="https://www.sinorbis.com/">Sinorbis</a><span> 2022</span></h2>
                        <ul>
                          <li><p>Worked with Amazon API Gateway, APIGEE API Management, Lambdas, and Serverless integration</p></li>
                          <li><p>Developed and consumed REST APIs</p></li>
                          <li><p>Applied DevOps, CI/CD principles, and utilized AWS cloud platforms</p></li>
                          <li><p>Managed source code using Git/Bitbucket</p></li>
                          <li><p>Communicated effectively, provided consultation, and created documentation</p></li>
                          <li><p>Gained experience in Java, Spring Boot, SOAP, web/network protocols, security/identity, QA, performance tuning, and capacity planning</p></li>
                          <li><p>Resolved cloud storage image issues in Chinese WeChat web chat by using AWS S3 as a mediator, optimizing image display speed and storing images on the S3 platform</p></li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at <a href="https://www.oppo.com/en/">OPPO Australia</a><span> 2020-2021</span></h2>
                        <ul>
                          <li><p>Optimized and analyzed modules written in Java to implement better software engineering practices</p></li>
                          <li><p>Design and developed different admin and front-end section of the application that provided a gateway to members to interact with each other as well as customer support.</p></li>
                          <li><p>In addition to work, coordinate accounting, warehousing and other departments to help digital transformation to ensure the company's efficiency</p></li>
                          <li><p>Engaged in multiple internal projects, developed various internal systems using Node.js as backend, enhancing interdepartmental efficiency and ensuring accuracy in supply and outbound logistics.</p></li>
                          </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
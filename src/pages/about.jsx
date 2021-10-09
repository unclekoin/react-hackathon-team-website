import React from 'react'
import img from '../assets/images/about.jpg'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5 mt-5">
      <div className="row flex-lg-row-reverse g-5 p-3 shadow">
        <div className="col-12 col-lg-6 my-0 my-lg-5">
          <img src={img} className="img-fluid shadow" alt="Hurricane team" loading="lazy"/>
        </div>
        <div className="d-flex flex-column justify-content-between col-lg-6 my-lg-5">
          <div className="d-flex flex-column my-auto">
            <h1 className="display-5 fw-bold lh-1 mb-3">Hurricane team</h1>
            <p className="lead">We are a hurricane team. Together we are strong!</p><p>
            If they contacted us, they will not let go.
            We do not make the world around us better, it just works like that ...</p><p>
            We are accustomed to this since childhood.
            No problem.</p><p>
            - You’re just in a bad mood today, right?</p><p>
            - I'm NEVER in the mood.</p>
          </div>
          <div className="d-grid gap-2 d-md-flex">
            <Link to={'/contacts'}>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

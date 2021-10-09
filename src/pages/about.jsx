import React from 'react'
import img from '../assets/images/about.jpg'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';

const About = () => {
  return (
  <>
      <Breadcrumbs />
    <div className="container col-xxl-8 px-4 py-5 mt-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 p-3 shadow">
        <div className="col-12 col-lg-6 my-0 my-md-5">
          <img src={img} className="d-block mx-auto img-fluid" alt="Hurricane team" loading="lazy"/>
        </div>
        <div className="col-lg-6 my-md-5">
          <h1 className="display-5 fw-bold lh-1 text-center mb-3">Hurricane team</h1>
          <p className="lead">We are a hurricane team. Together we are strong!</p><p>
          If they contacted us, they will not let go.
          We do not make the world around us better, it just works like that ...</p><p>
          We are accustomed to this since childhood.
          No problem.</p><p>
          - You’re just in a bad mood today, right?</p><p>
          - I'm NEVER in the mood.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-center">
            <Link to={'/contacts'}>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default About

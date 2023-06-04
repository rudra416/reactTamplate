import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faDna, faHospitalAlt, faHospitalUser, faNotesMedical, faWheelchair } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Facility() {
  return (
    <section id="services" className="services">
    <div className="container">
      <div className="section-title">
        <h2>Our Facilities</h2>
        <p>Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat sollicitudin. Fusce tincidunt sit
          amet ex in volutpat. Donec lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus placerat mi et
          suscipit pulvinar. Donec quis tristique lectus.</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="icon-box">
            <div className="icon">
                <div className='count-icon'>
                    <FontAwesomeIcon icon={faHospitalAlt} />
                </div>
            </div>
            <h4><a href="">24x7 Emergency Available</a></h4>
            <p>Nullam accumsan, velit et porta consequat, purus leo congue risus</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div className="icon-box">
            <div className="icon">
                <div className='count-icon'>
                    <FontAwesomeIcon icon={faBed} />
                </div>
            </div>
            <h4><a href="">40+ Bed Facilities</a></h4>
            <p>Pellentesque id felis elit. Pellentesque blandit sem a nisi dictum</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div className="icon-box">
            <div className="icon">
                <div className='count-icon'>
                    <FontAwesomeIcon icon={faHospitalUser} />
                </div>
            </div>
            <h4><a href="">Cardiogram Machine</a></h4>
            <p>Donec lacinia finibus tortor. Curabitur luctus eleifend odio.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon">
                <div className='count-icon'>
                    <FontAwesomeIcon icon={faDna} />
                </div>
            </div>
            <h4><a href="">X-ray and Sonography</a></h4>
            <p>Aliquam auctor felis ut sem elementum, ac rutrum turpis venenatis.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon">
                <div className='count-icon'>
                    <FontAwesomeIcon icon={faWheelchair} />
                </div>
            </div>
            <h4><a href="">Semi Special, Special and Delux Room Available</a></h4>
            <p>Etiam in massa eu neque euismod consectetur.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon">
                <div className='count-icon'>
                    <FontAwesomeIcon icon={faNotesMedical} />
                </div>
            </div>
            <h4><a href="">Medical</a></h4>
            <p>Morbi vulputate, tortor nec pellentesque molestie</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Facility
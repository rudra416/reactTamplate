import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faAward, faHeart, faHeartBroken, faHeartbeat, faHospital, faUser, faUserMd } from '@fortawesome/free-solid-svg-icons'
function Count() {
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
                <div className='count-icon'>
                    <FontAwesomeIcon icon={faUserMd} />
                </div>
                <span>23</span>
                <p>Doctors</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
                <div className='count-icon'>
                    <FontAwesomeIcon icon={faHospital} />
                </div>
                <span>18</span>
                <p>Departments</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
                <div className='count-icon'>
                    <FontAwesomeIcon icon={faHeartbeat} />
                </div>
                <span>980</span>
                <p>Patients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
                <div className='count-icon'>
                    <FontAwesomeIcon icon={faAward} />
                </div>
                <span>12</span>
                <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Count
import React from 'react'
import Header from '../components/layout/header'
import Footer from './Footer'
import facilityImg1 from '../assets/img/png/facility-img1.png'
import facilityImg2 from '../assets/img/png/facility-img2.png'
import facilityImg3 from '../assets/img/png/facility-img3.png'
import facilityImg4 from '../assets/img/png/facility-img4.png'
import facilityImg5 from '../assets/img/png/facility-img5.png'
import facilityImg6 from '../assets/img/png/facility-img6.png'
const Facilities = () => {
  return (
    <div>
      <Header />

      <section className="facilities-banner">
        <div className="d-flex align-items-center justify-content-center h-100">
          <h1 className="apr-sport-name text-center">THE FACILITY</h1>
        </div>
      </section>
      
      <section className='container pt-5'>
        <div className="row">
          <div className="col-md-6 pb-5 facilities-list">
            <img src={facilityImg1} alt="" className='img-fluid'  />
            <p className='facility-conatnt-heading'>indoor field</p>
          </div>
          
          <div className="col-md-6 pb-5 facilities-list">
            <img src={facilityImg2} alt="" className='img-fluid' />
            <p className='facility-conatnt-heading'>locker room</p>
          </div>
         
          
          <div className="col-md-6 pb-5 facilities-list">
            <img src={facilityImg3} alt="" className='img-fluid' />
            <p className='facility-conatnt-heading'>practice facility</p>
          </div>
         
         
          <div className="col-md-6 pb-5 facilities-list">
            <img src={facilityImg4} alt=""  className='img-fluid'/>
            <p className='facility-conatnt-heading'>ap ranch greats</p>
          </div>
        
        
          <div className="col-md-6 pb-5 facilities-list">
            <img src={facilityImg5} alt="" className='img-fluid' />
            <p className='facility-conatnt-heading'>team meeting room</p>
          </div>
         
          
          <div className="col-md-6  pb-5  facilities-list">
            <img src={facilityImg6} alt="" className='img-fluid' />
            <p className='facility-conatnt-heading'>stadium</p>
          </div>
          
        </div>
        
      </section>

 
      <Footer />
    </div>
  )
}

export default Facilities
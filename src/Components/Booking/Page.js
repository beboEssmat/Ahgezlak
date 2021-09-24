import React from 'react'
import {CCol,CCard,  CRow} from '@coreui/react'
 
import Slider from '../../containers/TheSidebar'
import Headere from '../../containers/TheHeader'
import Footer from '../../containers/TheFooter'
import Calendar from './Calendar';
import Time from './Time'
const Page = () => {
  return (
    <div className="c-app c-default-layout">
        <Slider />
        <div className="c-wrapper">
          <Headere />
        <div className="c-body">
           
        <CCol xs="12" lg="12">
             <CCard  className="my-5 px-5 py-5 shadow ">
                <CRow>
                    <CCol xs="6" lg="3">
                        <Calendar />
                    </CCol>
                    <CCol xs="12" lg="9">
                        <Time />
                    </CCol>
                </CRow>
            </CCard>
        </CCol>
        
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page
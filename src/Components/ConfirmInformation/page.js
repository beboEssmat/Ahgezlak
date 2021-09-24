import React from 'react'
import {CContainer,CCol,CCard,  CRow} from '@coreui/react'
 
import Slider from '../../containers/TheSidebar'
import Headere from '../../containers/TheHeader'
import Footer from '../../containers/TheFooter'
 
import Confirm from './Confirm'
const Page = () => {
  return (
    <div className="c-app c-default-layout">
        <Slider />
        <div className="c-wrapper">
          <Headere />
        <div className="c-body w-50 m-auto ">
            <CContainer>

            <h3 className="mt-3 ">Confirm Information</h3>
            <Confirm />
       
       </CContainer>
        
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page
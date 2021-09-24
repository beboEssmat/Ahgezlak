import React from 'react'
 
import Slider from '../../containers/TheSidebar'
import Headere from '../../containers/TheHeader'
import Footer from '../../containers/TheFooter'

import AllServices from './AllServices'
const Page = () => {
  return (
    <div className="c-app c-default-layout">
        <Slider />
        <div className="c-wrapper">
          <Headere />
        <div className="c-body">
            <h1 className="ml-3 mt-4">Choose Servic</h1>
            <h3 className="ml-3 mt-4 h1">All Services</h3>
            <AllServices />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page

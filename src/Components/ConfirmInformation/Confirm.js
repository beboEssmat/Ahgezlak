import React from 'react'
import {CContainer,CCol,CCard,  CRow, CButton} from '@coreui/react'
import { useHistory} from 'react-router-dom';

const Confirm = () => {
   const history = useHistory()
     const back = () => {
        history.push('/booking')
     }
  return (
   
    <CCard  className="  px-5 py-5 shadow rounded-5 ">
        
          <div className="mb-2">Servic: <strong>30 Minute Meeting</strong></div>

          <div className="mb-2">Provider: <strong>Abanoub Essmat</strong></div>

          <div className="mb-2">Date & Time: <strong> 2020-09-22 15:15:00</strong></div>

          <div className="mb-2">Your Info: <strong>abanoubessmat96@gmail.com</strong></div>
          
          <CButton className="btn btn-primary w-25 m-auto" onClick={back}>Back My Appointment</CButton>
         
    </CCard>
 
  )
}

export default Confirm
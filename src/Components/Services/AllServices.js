import React from 'react'
import { Table } from 'react-bootstrap';
import {CCard,CCardBody, CCol,CButton} from '@coreui/react'
import { Link } from 'react-router-dom';
const AllServices = () => {
  return (
    <CCol xs="12" lg="12">
    <CCard>
     
      <CCardBody>
      <Table responsive>
         
        <tbody>
            <tr>
                <td><Link to="/booking"><CButton> 60 Minute Meeting</CButton></Link></td>
                <td>0EGP</td>
            </tr>
            <tr>
                <td><Link to="/booking"><CButton> 45 Minute Meeting</CButton></Link></td>
                <td>0EGP</td>
            </tr>
            <tr>
                <td><Link to="/booking"  ><CButton> 30 Minute Meeting</CButton></Link></td>
                <td>0EGP</td>
            </tr>
        </tbody>
        </Table>
      </CCardBody>
    </CCard>
  </CCol>
  )
}

export default AllServices
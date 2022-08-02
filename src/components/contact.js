import React from 'react'
import {Container, Row, Col, Table} from 'react-bootstrap'
import {GoLocation} from 'react-icons/go'
import {IoMdContact} from 'react-icons/io'

const contact = () => {
    return (

        <Container style={{marginTop: '50px'}}>
            <Col md={6}>
        <h1>Contact Us</h1>
        <p>All our branches and contact numbers are given below.</p>

        <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th className='bg-warning text-center'>Our Branches</th>
          <th>Branch Name</th>
          <th>Adress <GoLocation /></th>
          <th>Contact <IoMdContact /></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bashundhara City</td>
          <td>Panthopath</td>
          <td>1234567</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jamuna Future Park</td>
          <td>Bashundhara Residential Area</td>
          <td>1234567</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Molla Tower</td>
          <td>Rampura</td>
          <td>1234567</td>
        </tr>
 
      </tbody>
    </Table>

        </Col>

        <Col md={8}>
            <Row>
                <h1>Jamuna Future Park branch</h1>
            <img src="images/jfp.jpg" height={'500'} width={'500'}/>
            <h1>Bashundhara branch</h1>
            <img src="images/bashundhara.jpg" height={'500'} width={'500'}/>
            <h1>Molla Tower Branch</h1>
            <img src="images/banasree.jpg" height={'500'} width={'500'}/>
            </Row>
            </Col>

          
        
        </Container>
    )
}

export default contact;
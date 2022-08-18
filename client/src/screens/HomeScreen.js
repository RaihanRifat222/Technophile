import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';


const HomeScreen = () => {

  const [pp, setPp] = useState ([]) 
  
  useEffect( () => {
    fetch('/api/products/getAllProducts')
    .then(res => res.json ())
    .then(data => setPp(data))
    
},[])
console.log(pp)
  return (
    <>
    <Container>
      {
      // loading ? (<h1> Loading ... </h1>)
      // : error ? (<h1>Error while fetching products</h1>)
      ( <Row>
        {pp.map(product =>
         <Col md={4}>
           <Product p ={product} />
         </Col>

         )}
   </Row>)
     }
       
    </Container>
    </>
  )
}
export default HomeScreen
import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Product = ({p}) => {
  const [varient, setVarient] = useState (p.varients[0]);
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const cartState = useSelector (state => state.cartReducer)
  const addToCartHandler = () => {
    dispatch(addToCart(p, quantity, varient));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px" }}>
        <Card.Img
          variant="top"
          src={p.image}
          style={{ height: "250px", cursor: "pointer" }}
          onClick={handleShow}
        />

        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {p.varients.map((varient) => (
                    <option key={varient}>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price : {p.prices[0][varient] * quantity} /-RS</Col>
            <Col md={6}>
              <Button
                onClick={addToCartHandler}
                className="bg-warning text-white"
              >
                Add to cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{p.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={p.image}
              style={{ height: "250px" }}
            />
          </div>
          <div>
            <h5>Description :</h5>
            <h6>{p.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Product;

//   return (
//     <>
//     <Card style={{ width: '18rem', marginTope: '30px'}}>
//       <Card.Img variant="top" 
//       src={p.image} 
//       style={{height: '300px', width: '250px'}} 
//       onClick={handleShow}
//       />
//       <Card.Body>
//         <Card.Title>{p.name}</Card.Title>
//         <hr/>
//         <Card.Text>
//           <Row>
//             <Col md={6}>
//                 <h6>Varients</h6>
//                 <select value={varient} onChange={e => setVarient (e.target.value)}>
//                     {p.varients.map( varient => (
//                         <option >{varient}</option>
//                     )

//                     )}
//                 </select>
//             </Col>
//             <Col md={6}>
//                 <h6>Quantity</h6>
//                 <select  value= {quantity} onChange={e=> setQuantity(e.target.value)}>
//                     {[...Array(10).keys()].map((v,i) => (
//                         <option 
                       
//                         >{i+1}
//                         </option>
//                     )
//                     )
//                     }
//                 </select>
//             </Col>
//             <Col md={6}></Col>
//           </Row>
//         </Card.Text>
//         <Row>
//           <Col md={6}>Price : {p.prices[0][varient] * quantity } TK</Col>
//           <Col md={6}>
//             <Button 
//             onClick={addToCartHandler}
//             className='bg-warning text-white'>Add to Cart</Button>
//           </Col>
         
//         </Row>
//       </Card.Body>
//     </Card>

//     <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{p.name}</Modal.Title>
//         </Modal.Header>
        
//         <Modal.Body>
//           <div>
//           <Card.Img variant="top" 
//             src={p.image} 
//             style={{height: '300px', width: '250px'}
      
//       } 
//       />
//           </div>
//           <div>
//             <h4>Descpription</h4>
//             <h6>{p.description}</h6>
          
//           </div>
//           </Modal.Body>
//         <Modal.Footer>
          
//         </Modal.Footer>
//       </Modal>

//     </>
//   )
// }

// export default Product
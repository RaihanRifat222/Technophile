import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AddNewProduct from "../components/Admin/AddNewProduct";
import OrderList from "../components/Admin/OrderList";
import Productlist from "../components/Admin/Productlist";
import Userlist from "../components/Admin/Userlist";
import EditProduct from "./../components/Admin/EditProduct";
const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => history.push("/admin/userlist")}>
                All Users
              </Button>
              <Button onClick={() => history.push("/admin/productlist")}>
                All Products
              </Button>
              <Button onClick={() => history.push("/admin/addnewproduct")}>
                Add New Product
              </Button>
              <Button onClick={() => history.push("/admin/orderlist")}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Switch>
              <Route path="/admin" component={Userlist} exact />
              <Route path="/admin/editproduct/:productId" component={EditProduct} exact />
              <Route path="/admin/userlist" component={Userlist} exact />
              <Route
                path="/admin/editproduct/:productId"
                component={EditProduct}
                exact
              />
              <Route path="/admin/productlist" component={Productlist} exact />
              <Route path="/admin/addnewproduct" component={AddNewProduct} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;

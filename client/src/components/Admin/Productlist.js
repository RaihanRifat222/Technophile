import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deleteProduct, getAllProducts } from "../../actions/productAction";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const Productslist = () => {
  const dispatch = useDispatch();
  const productstate = useSelector((state) => state.getAllProductReducer);
  const { loading, products, error } = productstate;
  console.log(products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching products {error}</Error>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => (
                  <tr>
                    <td>
                      <img
                        src={product.image}
                        alt="logo"
                        width="100px"
                        height="100px"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>
                      Small : {product.prices[0]["small"]}
                      <br />
                      Medium : {product.prices[0]["medium"]}
                      <br />
                      Large : {product.prices[0]["large"]}
                    </td>
                    <td>{product.category}</td>
                    <td>
                      <Link to={`/admin/editproduct/${product._id}`}>
                        <AiFillEdit style={{ cursor: "pointer" }} />
                      </Link>
                      &nbsp;
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deleteProduct(product._id));
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Productslist;

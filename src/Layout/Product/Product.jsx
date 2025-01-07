import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Dropdown, Row, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";  
import { fetchProducts } from "../../redux/productsSlice";
import { fetchCategories } from "../../redux/categoriesSlice";
import { fetchBrands } from "../../redux/brandsSlice";  

const Product = () => {  
  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products);
  const categories = useSelector(state => state.categories.categories);
  const brands = useSelector(state => state.brands.brands);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);  
    }
  }, []);
  

   useEffect(() => {
    console.log("Fetched Products: ", products);
    console.log("Fetched Categories: ", categories);
    console.log("Fetched Brands: ", brands);
  }, [products, categories, brands]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    );
  };

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((item) => item !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatches =
      selectedCategories.length === 0 || selectedCategories.includes(product.productCategory.name);

    const brandMatches =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand.name);

    return categoryMatches && brandMatches;
  });

  useEffect(() => {
    console.log("Filtered Products: ", filteredProducts);
  }, [filteredProducts]);

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === product.id);
    let updatedCart;

    if (existingItemIndex > 0) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log("Updated Cart:", updatedCart);
  };

  return (
    <Container style={{ padding: "1% 0%" }}>
      <Row>
        <Col className="mt-3 position-relative" style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 className="">All Products</h3>
          <Dropdown className="short-by-drop">
            <Dropdown.Toggle id="dropdown-basic" className="bg-white text-black border-black">
              Relevance
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Relevance</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Relevance</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row>
        <Col xs={4} className="mt-5">
          <Accordion defaultActiveKey="0" className="border mb-5">
            <div className="filter-heading">Filter By</div>
            <Accordion.Item eventKey="0" className="mt-4">
              <Accordion.Header>Category</Accordion.Header>
              {categories.map((category, i) => (
                <Accordion.Body key={i}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={category.name}
                      id={`category-${i}`}
                      onChange={handleCategoryChange}
                      checked={selectedCategories.includes(category.name)}
                    />
                    <label className="form-check-label" htmlFor={`category-${i}`}>
                      {category.name}
                    </label>
                  </div>
                </Accordion.Body>
              ))}
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Brands</Accordion.Header>
              {brands.map((brand, i) => (
                <Accordion.Body key={i}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={brand.name}
                      id={`brand-${i}`}
                      onChange={handleBrandChange}
                      checked={selectedBrands.includes(brand.name)}
                    />
                    <label className="form-check-label" htmlFor={`brand-${i}`}>
                      {brand.name}
                    </label>
                  </div>
                </Accordion.Body>
              ))}
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col xs={8} className="ml-3">
          <Row className="mt-5">
            {filteredProducts.length === 0 ? (
              <p>No products match your filter criteria.</p>
            ) : (
              filteredProducts.map((product, i) => (
                <Col key={i} className="col-md-3 col-sm-1 mb-3">
                  <Card className="product-card" style={{ width: "110%", border: "1px solid rgba(0, 0, 0, 0.10)" }}>
                    <Card.Img
                      variant="top"
                      src={product.mediaFiles[0]?.url}
                      style={{ height: "200px", width: "100%", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        <p>
                          ₹{product.variant[0]?.price}{" "}
                          <strike>₹{product.actualprice}</strike>{" "}
                          <span>{product.offpercent}% off</span>
                        </p>
                      </Card.Text>
                      <Button className="addcart-button" variant="primary" onClick={() => handleAddToCart(product)}>
                        ADD TO CART
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;  

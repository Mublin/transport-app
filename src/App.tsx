import { useState } from "react";
import Navbar from "react-bootstrap/Navbar"
import 'bootstrap/dist/css/bootstrap.css'
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Offcanvas from "react-bootstrap/Offcanvas"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import SearchScreen from "./screens/SearchScreen"
// import PaymentScreen from "./screens/PaymentScreen"
import BookingScreen from "./screens/BookingScreen"
import AboutScreen from "./screens/AboutScreen"
import JourneyScreen from "./screens/JourneyScreen";


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <BrowserRouter>
    <div className="App">
      <div>
      <Navbar bg="dark" variant='dark' expand="lg">
          <Container fluid>
            <Link to={"/"} style={{textDecoration: "none"}}><Navbar.Brand>Shopping Cart</Navbar.Brand></Link>
            <button aria-controls="navbarScroll" type="button" aria-label="Toggle navigation" onClick={handleShow} className="collapsed"><span className="navbar-toggler-icon"></span></button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px', margin: "0" }}
                navbarScroll
              >
                <Link to={"/"} className="nav-item"><Nav.Item>Home</Nav.Item></Link>
                <Link to={"/search"} className="nav-item" ><Nav.Item>Seach Journeys</Nav.Item></Link>
                <Link to={"/about"} className="nav-item" ><Nav.Item>About</Nav.Item></Link>
              </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
        </Navbar>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          {/* <Route path="/payment" element={<PaymentScreen />} /> */}
          <Route path="/booking/:journey/:id" element={<BookingScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/journey" element={<JourneyScreen />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  )
}

export default App

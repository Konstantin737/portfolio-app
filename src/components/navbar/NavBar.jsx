import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './NavBar.module.css'
import CloseButton from 'react-bootstrap/CloseButton'

function NavBar() {
  return (
   <>
      {['sm'].map((expand) => (
      <Navbar key={expand} expand="lg" variant="dark" className={`mb-3 ${styles.navbar}`}>
         <Container fluid className={styles.navbar}>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Brand href="/">"PortfolioApp"</Navbar.Brand>
            <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            >
            <Offcanvas.Header closeButton className={styles.bodycolor}>
               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Меню
               </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.bodycolor}>
               <Nav className={`justify-content-end flex-grow-1 pe-3 ${styles.bodycolor}`}>
                  <Nav.Link href="/works">Работы</Nav.Link>
                  <Nav.Link href="/courses">Курсы</Nav.Link>
               </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
         </Container>
      </Navbar>
      ))}
   </>
  );
}

export default NavBar;
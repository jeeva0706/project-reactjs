
import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";
import './Navbar.css';
// import { HiShoppingCart } from "react-icons/hi2";


function NavbarData() {
  const [showSubjectsDropdown, setShowSubjectsDropdown] = useState(false);
  const dropdownRef = useRef(null); 

 
  const handleDropdownToggle = () => {
    setShowSubjectsDropdown(!showSubjectsDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSubjectsDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='d-inline'>
      <Container fluid className='Navbar-data'>
        <Navbar bg="white" expand="lg" className='navabar-data-importent'>
          <Navbar.Brand className='ms-2 me-md-auto me-sm-auto'>
            <h1 className='letter d-lg-none'>
              <span>E</span>COURSES
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Row className="align-items-center w-100">
              <div
                className={`navbar-dropdown-padding d-none d-lg-block ms-5 d-lg-block ${showSubjectsDropdown ? 'dropdown-active' : ''}`}
                onClick={handleDropdownToggle}
                ref={dropdownRef}
              >
                <Col xs="auto" className="d-none d-lg-flex align-items-center me-3 col-for-subjrct-dropdown">
                  <FaBookOpen className='icon-book-data' />
                  <NavDropdown
                    title="Subjects"
                    className='SUBJCT-FOR-DROP d-none d-lg-block py-3 ms-2'
                    show={showSubjectsDropdown}
                    onMouseLeave={() => setShowSubjectsDropdown(false)}
                    ref={dropdownRef}
                  >
                    <NavDropdown title="Web Design" className='navbar-list-subjects'>
                      <NavDropdown.Item>HTML</NavDropdown.Item>
                      <NavDropdown.Item>CSS</NavDropdown.Item>
                      <NavDropdown.Item>jQuery</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item>App Design</NavDropdown.Item>
                    <NavDropdown.Item>Marketing</NavDropdown.Item>
                    <NavDropdown.Item>Research</NavDropdown.Item>
                    <NavDropdown.Item>SEO</NavDropdown.Item>
                  </NavDropdown>
                </Col>
              </div>

              <Col className="me-auto">
                <Nav className="ms-4">
                  <Nav.Link as={Link} to="/" className='list-1 ms-2'>Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" className='list-2 ms-2'>About</Nav.Link>
                  <Nav.Link as={Link} to="/courses" className='list-2 ms-2'>Courses</Nav.Link>
                  <Nav.Link as={Link} to="/teachers" className='list-2 ms-2'>Teachers</Nav.Link>
                  <NavDropdown
                    title="Blog"
                    className='list-3 ms-2'
                  >
                    <NavDropdown.Item as={Link} to="/blog-list" className='list-4'>Blog List</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/blog-details" className='list-4'>Blog Details</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contact" className='list-2 ms-2'>Contact</Nav.Link>
                  {/* <Nav.Link as={Link} to="/login" className='list-2 ms-2'>Login</Nav.Link> */}
                  {/* <HiShoppingCart className='icons-for-cart mt-2 ms-5'/> */}
                </Nav>
              </Col>
              <Col xs="auto" className="d-none d-lg-block">
                <Button className="" style={{ backgroundColor: '#FF6600', borderColor: '#FF6600', padding: "8px 25px" }}>
                  Join Now
                </Button>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavbarData;

// import React, { useState, useEffect, useRef } from 'react';
// import { Navbar, Nav, NavDropdown, Button, Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaBookOpen, FaAngleDown } from "react-icons/fa";
// import './Navbar.css';

// function NavbarData() {
//   const [showList, setShowList] = useState(false);
//   const [showWebDesign, setShowWebDesign] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleList = () => {
//     setShowList(!showList);
//   };

//   const toggleWebDesign = () => {
//     setShowWebDesign(!showWebDesign);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowList(false);
//         setShowWebDesign(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className='d-inline'>
//       <Container fluid className='Navbar-data'>
//         <Navbar bg="white" expand="lg" className='navabar-data-importent'>
//           <Navbar.Brand className='ms-2 me-md-auto me-sm-auto'>
//             <h1 className='letter d-lg-none'>
//               <span className='e-letter-2'>E</span>COURSES
//             </h1>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Row className="align-items-center w-100">
//               <Col xl={3} className='d-none d-lg-block'>
//                 <ul className="course-list" ref={dropdownRef}>
//                   <li
//                     onClick={toggleList}
//                     className={`drop-down-navbar ${showList ? 'active' : ''}`}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     <FaBookOpen className='book-icon' /> <div className='subject'>Subjects </div> <FaAngleDown className='angle-down' />
//                   </li>

//                   <div className={`dropdown-list ${showList ? 'show' : ''}`}>
//                     <li
//                       onClick={toggleWebDesign}
//                       className={`web-design ${showWebDesign ? 'active' : ''}`}
//                       style={{ cursor: 'pointer' }}
//                     >
//                       Web design <FaAngleDown className='angle-down-down' />
//                     </li>

//                     <div className={`sublist ${showWebDesign ? 'show' : ''}`}>
//                       <li className="sublist-item">HTML</li>
//                       <li className="sublist-item">CSS</li>
//                       <li className="sublist-item">jQuery</li>
//                     </div>

//                     <li className="main-list-item">App design</li>
//                     <li className="main-list-item">Marketing</li>
//                     <li className="main-list-item">Research</li>
//                     <li className="main-list-item">SEO</li>
//                   </div>
//                 </ul>
//               </Col>

//               <Col className="me-auto">
//                 <Nav className="ms-4">
//                   <Nav.Link as={Link} to="/" className='list-1 ms-2'>Home</Nav.Link>
//                   <Nav.Link as={Link} to="/about" className='list-2 ms-2'>About</Nav.Link>
//                   <Nav.Link as={Link} to="/courses" className='list-2 ms-2'>Courses</Nav.Link>
//                   <Nav.Link as={Link} to="/teachers" className='list-2 ms-2'>Teachers</Nav.Link>
//                   <NavDropdown
//                     title="Blog"
//                     className='list-3 ms-2'
//                   >
//                     <NavDropdown.Item as={Link} to="/blog-list" className='list-4'>Blog List</NavDropdown.Item>
//                     <NavDropdown.Item as={Link} to="/blog-details" className='list-4'>Blog Details</NavDropdown.Item>
//                   </NavDropdown>
//                   <Nav.Link as={Link} to="/contact" className='list-2 ms-2'>Contact</Nav.Link>
//                 </Nav>
//               </Col>
//               <Col xs="auto" className="d-none d-lg-block">
//                 <Button className="btn-btn-btn">
//                   Join Now
//                 </Button>
//               </Col>
//             </Row>
//           </Navbar.Collapse>
//         </Navbar>
//       </Container>
//     </div>
//   );
// }

// export default NavbarData;

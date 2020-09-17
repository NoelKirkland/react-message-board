import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header(props) {
  const { dispatch, topicsList } = props;
  const pointer = {
    cursor: 'pointer'
  }
  return (
    <React.Fragment>
      <Navbar sticky="top" expand="lg">
      <Navbar.Brand style={pointer} onClick={()=>dispatch(a.viewIndex())}>Discussion Forum</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={pointer} onClick={()=>dispatch(a.viewIndex())}>Topics</Nav.Link>
          {/* <Nav.Link href="#link">Tickets</Nav.Link> */}
          <NavDropdown title="Go To Topic" id="basic-nav-dropdown">
            {topicsList.map((topics) => {
              return (
                <NavDropdown.Item
                  onClick={()=>dispatch(a.viewTopic(topics.id))}
                  key={topics.id}>{topics.name}</NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Nav>
        {/* <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  topicsList: PropTypes.array
}

const mapStatesToProps = (state) => {
  const topicsList = Object.values(state['topicsList']);
  return {
    topicsList
  }
}

export default connect(mapStatesToProps)(Header);
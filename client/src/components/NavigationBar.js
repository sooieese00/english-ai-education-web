import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // 파일명에 맞게 경로 수정

function NavigationBar() {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand as={Link} to="/">Langbot</Navbar.Brand>
    </Navbar>
  );
}

export default NavigationBar;

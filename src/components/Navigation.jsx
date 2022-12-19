import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="navTop">
			<Container fluid>
				<Navbar.Brand>
					<Link to="/">
						<img width={100} src="/tiving_logo.png" alt="logo"></img>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Link to="/" className="nav-item">
							Home
						</Link>
						<Link to="/movies" className="nav-item">
							영화
						</Link>
						<Link to="#" className="nav-item">
							TV프로그램
						</Link>
						<Link to="#" className="nav-item">
							<img
								width={80}
								src="/menu_paramount.svg"
								alt="paramount menu"
							></img>
						</Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="제목을 검색해보세요"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="danger">
							<FiSearch />
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;

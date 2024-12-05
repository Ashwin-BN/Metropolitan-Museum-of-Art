import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAtom } from "jotai";
import { searchHistoryAtom } from "@/store";
import { Container, Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { addToHistory } from "@/lib/userData";
import { readToken, removeToken } from "@/lib/authenticate";

export default function MainNav() {
  const router = useRouter();
  let token = readToken();
  //console.log("Decoded token:", token);
  
  //const userName = token?.username;console.log(`userName: ${userName}`);

  const [searchField, setSearchField] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  function logout() {
    setIsExpanded(false);
    removeToken();
    token
    router.push('/login');
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    setSearchHistory(await addToHistory(`title=true&q=${searchField}`));
    setIsExpanded(false);
    router.push(`/artwork?title=true&q=${searchField}`);
    setSearchField("");
  }

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary fixed-top" data-bs-theme="dark" expanded={isExpanded}>
      <Container className="container-xxl">
        <Navbar.Brand>Ashwin B N</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsExpanded(!isExpanded)}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link href="/" passHref legacyBehavior>
            <Nav.Link active={router.pathname === "/"} onClick={() => setIsExpanded(false)}>Home</Nav.Link>
          </Link>
          {token &&
          <Link href="/search" passHref legacyBehavior>
            <Nav.Link active={router.pathname === "/search"} onClick={() => setIsExpanded(false)}>Advanced Search</Nav.Link>
          </Link>}
          </Nav>
          &nbsp;
          {token &&
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            />
            <Button variant="success" type="submit">Search</Button>
          </Form>}
          &nbsp;
          {token ? (
          <Nav>
          <NavDropdown title={token.username || "User Name"} id="basic-nav-dropdown">
            <Link href="/favourites" passHref legacyBehavior>
              <NavDropdown.Item active={router.pathname === "/favourites"} onClick={() => setIsExpanded(false)} >Favourites</NavDropdown.Item>
            </Link>
            <Link href="/history" passHref legacyBehavior>
              <NavDropdown.Item active={router.pathname === "/history"} onClick={() => setIsExpanded(false)} >Search History</NavDropdown.Item>
            </Link>
            <NavDropdown.Item onClick={() => {logout()}}>Logout</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          ) : (
            <Nav>
              <Link href="/register" passHref legacyBehavior>
                <Nav.Link onClick={() => setIsExpanded(false)} active={router.pathname === "/register"}>Register</Nav.Link>
              </Link>
              <Link href="/login" passHref legacyBehavior>
                <Nav.Link onClick={() => setIsExpanded(false)} active={router.pathname === "/login"}>Login</Nav.Link>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br/>
    <br/>
    </>
  );
}
import { Nav, Navbar, Icon } from "rsuite";

function HomeNavbar() {
  return (
    <Navbar appearance="inverse">
      <Navbar.Body>
        <Nav>
          <Nav.Item href="https://fullthrottlelabs.com/">
            <img
              src="https://fullthrottlelabs.com/img/logo/logo-2.png"
              className="h-9"
            ></img>
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}

export default HomeNavbar;

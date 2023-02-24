// import dependencies and libraries
import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// build component
const Header = () => {
    return (
        <div className="container">

            {/* page title */}
            <Navbar>
                <Navbar.Brand>Fattura</Navbar.Brand>
            </Navbar>

            {/* page navigation bar */}
            <Nav className="justify-content-center">
                <Nav.Item>
                    {/* links to diferent pages */}
                    <LinkContainer to="/allinvoices">
                        <Nav.Link>
                            <Button className='nav-button'>All Invoices</Button>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/addinvoice">
                        <Nav.Link>
                            <Button className='nav-button'>Add Invoice</Button>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/updateinvoice">
                        <Nav.Link>
                            <Button className='nav-button'>Update Invoice</Button>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </div>
    )
}

// export component
export default Header;
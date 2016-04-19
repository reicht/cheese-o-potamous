var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Nav = ReactBootstrap.Nav;

var Nav_bar = React.createClass({

  render: function () {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Cheese Directory</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/users">Users</NavItem>
            <NavItem eventKey={2} href="/users/new">Register</NavItem>
            <NavItem eventKey={3} href="/sign_in">Login</NavItem>
            <NavItem eventKey={4} href="/sign_out">Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )}
})

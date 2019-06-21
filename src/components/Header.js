import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

import Homepage from "./Homepage";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              tag={Link}
            >
              Şirket Adı
            </NavbarBrand>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            
            <Nav navbar>
            <NavItem>
                <NavLink tag={Link} to="/anasayfa" component={Homepage}>
                  Anasayfa
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/hakkinda" >
                  Hakkında
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/lojistik">
                  Lojistik
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="/iletisim">
                  İletişim
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>


        <BrowserRouter>
      <Route
        path="/deneme2"
        component={Homepage}
      />
  </BrowserRouter>
      </Navbar>
    );
  }
}

export default Header;


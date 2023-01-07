const NavItem = (props) => (

    <li className="nav-item">
      <a href="/" className="nav-link active">{props.text}</a>
    </li>
);

export default NavItem;
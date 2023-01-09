import NavItem from "./NavItem";
import CardWidget from "./CartWidget";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";


function NavBar() {

    const links = [{title:"Inicio", url: "/"}, {title:"Celulares", url: "/category/Celulares" }, {title:"Computacion", url:"/category/Computacion"}, {title:"Accesorios", url:"/category/Accesorios"}];
    
    return (
        <header>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Logo/>
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <NavItem href="/"> </NavItem>

                    <Link to="/category/Celulares"></Link>
                    <Link to="/category/Computacion"></Link>
                    <Link to="/category/Accesorios"></Link>

                    {links.map( (elemento) =>  ( <NavItem key={elemento.title} href={elemento.url}>{elemento.title}</NavItem>
                    ))}
                    
                </ul>
                <Link to="/login">
                <button className="btn btn-outline-success m-4" type="submit">Login</button>
                </Link>
                <Link to="/cart">
              <CardWidget />
            </Link>

                </div>
            </nav>  
            </header>
    );
}

export default NavBar;



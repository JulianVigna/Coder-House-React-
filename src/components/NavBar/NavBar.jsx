import NavItem from "./NavItem";
import CardWidget from "./CartWidget";
import Logo from "../Logo/Logo";



function NavBar() {

    const links = ["Inicio", "Tienda", "Nosotros"];
    
    return (
        <header>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Logo/>
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <NavItem href="/"> </NavItem>

                    {links.map( (elemento) =>  ( <NavItem href="/">{elemento}</NavItem>
                    ))}
                    
                </ul>
                <button className="btn btn-outline-success m-4" type="submit">Login</button>
                <CardWidget/>

                </div>
            </nav>  
            </header>
    );
}

export default NavBar;



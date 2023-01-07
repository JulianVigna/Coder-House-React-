import NavItem from "./NavItem";
import CardWidget from "./CartWidget";
import Logo from "../Logo/Logo";



function NavBar() {
    
    
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <Logo/>
                    <a href="/" className="navbar-brand" ></a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    
                    <NavItem text="Inicio" />
                    <NavItem text="Tienda" />
                    <NavItem text="Nosotros" />
                </ul>
                
                <button className="btn btn-outline-success m-4" type="submit">Login</button>

                <CardWidget/>
            
                </div>
            </nav>
        
    );
}

export default NavBar;



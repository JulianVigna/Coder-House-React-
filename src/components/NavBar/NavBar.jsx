import NavItem from "./NavItem";
import CardWidget from "./CartWidget";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext"
import Button from "../Button/Button";
import { useContext } from "react";


function NavBar(props) {

    const links = [{title:"Inicio", url: "/"}, {title:"Celulares", url: "/category/Celulares" }, {title:"Computacion", url:"/category/Computacion"}, {title:"Accesorios", url:"/category/Accesorios"}];

    const context = useContext(cartContext);
    context.test();

    
    function handleSubmit(evt) {
        evt.preventDefault();
        let user = evt.target.elements[0].value;
        console.log(user);
        props.onLogin(user);
      }

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
                    
                    

                    <form onSubmit={handleSubmit}>
                    Buscador: 
                    <input name="user"></input>
                    </form>
                </ul>
                <Link to="/login">
                
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



// IMPORTING LINK FROM REACT ROUTER DOM
import { Link } from "react-router-dom";

// DEFINIG THE NAVBAR COMPONENT
const Navbar = () => {

  // CREATING THE UI FOR THE NAVBAR COMPONENT
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="App-title">
              Habbit
            </Link>
          </li>
          <li className="Button" role="link">
            <Link to="/habbits" className="btn btn-default">
              ALL Habbits
            </Link>
          </li>
          <li role="link">
            <Link to="/create" className="btn btn-primary">
              New Habbit
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// MAKING DEFAULT EXPORT
export default Navbar;

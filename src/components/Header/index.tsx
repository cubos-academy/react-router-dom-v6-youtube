import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <header>
      <h2>Meu site</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </header>
  );
}

export default Header;

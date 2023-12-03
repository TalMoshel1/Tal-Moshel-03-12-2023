import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>Tal Moshel Weather App</h1>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/favorites">FAVORITES</Link>
      </div>
    </header>
  );
}

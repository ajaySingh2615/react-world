import { Link } from "react-router-dom";
import PageNav from "../components/PageNav/PageNav.jsx";
import AppNav from "../components/AppNav/AppNav.jsx";

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">HomePage</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default HomePage;

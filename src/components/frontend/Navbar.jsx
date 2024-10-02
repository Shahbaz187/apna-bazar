import { Container } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaSearch } from "react-icons/fa";

function MyNavbar() {
  return (
    <>
      <nav className="navbar px-3 px-md-5">
        <div className="logo">
          <h2>APNA BAZAAR</h2>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search in apna bazaar..." />
          <span>
            <FaSearch />
          </span>
        </div>
        <div className="d-none d-lg-flex gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=61561335181043"
            target="_blank"
          >
            <FaFacebook size={27} color="#333333" />
          </a>
          <a
            href="https://www.instagram.com/shahbaz_ansari_2007/"
            target="_blank"
          >
            <AiFillInstagram size={30} color="#333333" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;

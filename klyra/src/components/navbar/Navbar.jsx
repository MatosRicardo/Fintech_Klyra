import Styles from "../navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import iconNav from "../../../public/iconNav.svg";
import { LucideLogIn } from "lucide-react";

export default function Navbar() {
  return (
    <div className={Styles.container}>
      <nav className={Styles.navbar}>
        <Link>
          <img src={iconNav} className={Styles.logo} />
        </Link>
        <Link to="/beneficios">
          <p>Benefícios</p>
        </Link>
        <Link to="/investimentos">
          <p>Investimentos</p>
        </Link>
        <Link to="/contatos">
          <p>Blog</p>
        </Link>
        <Link to="/sobre nos">
          <p>Sobre Nós</p>
        </Link>
        <Link>
          <button className={Styles.buttonNav}>
            Cadastre-se <LucideLogIn className={Styles.iconLogin} />{" "}
          </button>
        </Link>
      </nav>
    </div>
  );
}

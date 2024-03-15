import { Scroll, Timer } from "phosphor-react";
import { HeaderContainer } from "./styles";

import { Link } from "react-router-dom";
import logoIgnite from "../../assets/logo-ignite.svg";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <Link to="/" title="Timer">
          <Timer size={24} />
        </Link>
        <Link to="/history" title="Histórico">
          <Scroll size={24} />
        </Link>
      </nav>
    </HeaderContainer>
  );
}

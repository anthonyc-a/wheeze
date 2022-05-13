import React, {useState} from "react";
import HeaderComponent from "../components/Layout/Header/header";
import MenuComponent from "../components/Layout/Header/Menu/Menu";
import UtilityComponent from "../components/Layout/Header/Utility/Utility";
import { PageContainer } from "../components/styles/PageContainer.styled";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <HeaderComponent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MenuComponent menuOpen={menuOpen} />
      <UtilityComponent />
      <PageContainer>hi</PageContainer>
    </div>
  );
};

export default Index;

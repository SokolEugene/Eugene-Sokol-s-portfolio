import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/main/skills/Skills";
import { Works } from "./layout/sections/main/works/Works";
import { AboutMe } from "./layout/sections/main/testimony/AboutMe";
import { Contacts } from "./layout/sections/main/contacts/Contacts";
import { Footer } from "./layout/Footer/Footer";

export function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  );
}

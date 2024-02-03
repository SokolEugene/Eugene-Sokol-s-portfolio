import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/main/skills/Skills";

export function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
    </div>
  );
}

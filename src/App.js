import React from "react";
import './style.css';
import { Button } from './Button';
import { Search } from './Search';
import { Logo } from './Logo';

export default function App() {
  return (
    <div className="mainContent">
        <Logo />
        <Search />
        <div style={{ display: 'flex' }}>
          <Button value="Google search" />
          <Button value="I'm feeling lucky" />
        </div>
        <p className="small">
          Google offered in:
          <a href="#">Hausa</a>
          <a href="#">Igbo</a>
          <a href="#">Ede Yoruba</a>
          <a href="#">Nigerian Pidgin</a>
        </p>
  </div>
  );
}
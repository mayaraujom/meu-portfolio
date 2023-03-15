
import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import menuHamburguer from '../../assets/icons/menu-hamburguer.svg';

import './style.css'

const NavBar = () => {
  const navItems = ["Sobre mim", "Experiência", "Projetos", "Contato"];
  const navItemsLink = ["/", "/experiencia", "/projetos", "/contato"]

  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className='menuHamburguer__container'>
          <div className='menuHamburguer pt-2 px-2' onClick={() => setShowDropdown(!showDropdown)}>
            <img src={menuHamburguer} alt='Menu Hamburguer' />
          </div>
        </div>

        <div className='navbar__container'>
          {
            navItems.map((item, index) => (
              <div key={index} className="navbar__options">
                <NavLink to={navItemsLink[index]}>
                  {item}
                </NavLink>
              </div>
            ))
          }
        </div>
      </nav>
      {
        showDropdown && (
          <section className='dropdownMenu'>
            <ul>
              {
                navItems.map((item, index) => (
                  <li key={index} onClick={() => { setShowDropdown(!showDropdown); navigate(`${navItemsLink[index]}`) }}>{item}</li>
                ))
              }
            </ul>
          </section>
        )
      }
    </>
  )
}

export default NavBar;
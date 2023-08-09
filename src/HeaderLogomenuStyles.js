import { css } from 'lit';

/**
 * css variables:
 * --header-logomenu-color-primary
 * --header-logomenu-text-color
 * --header-logomenu-background-color
 * --header-logomenu-color-dark
 * --header-logomenu-height
 */
export const HeaderLogomenuStyles = css`
  :host {
    --header-logomenu-height: 4rem;
    --header-logomenu-color-primary: #F70;
    --header-logomenu-color-dark: #000;
    --header-logomenu-text-color: #000;
    --header-logomenu-background-color: #fff;
    --header-logomenu-border: 0;
    --header-logomenu-menu-background-color: #eee;
    --header-logomenu-submenu-background-color: #ddd;
    --header-logomenu-menu-color: #000;
    --header-logomenu-submenu-color: #000;
    --header-logomenu-background-color-selected: #eee;
    --header-logomenu-color-bar: #000;
    --header-logomenu-element-hover-border: 2px solid var(--header-logomenu-color-dark);
    --header-logomenu-element-hover-background-color: var(--header-logomenu-background-color-selected);
    --header-logomenu-element-hover-border-radius: 0.5rem;
  
    display: block;
    margin: 0;
    padding: 0;
    color: var(--header-logomenu-text-color);
    visibility: hidden;
  }

  header {
    margin:0;
    padding:0;
    display: flex;
    width: 100vw;
    height: var(--header-logomenu-height);
    background-color: var(--header-logomenu-background-color);
    border: var(--header-logomenu-border);
  }

  button {
    border:0;
    background-color: transparent;
    cursor: pointer;
    margin:0;
    padding: 0;
  }

  li {
    list-style: none;
    margin:0;
    padding: 0;
  }

  nav > ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    border:0;
    margin:0;
  }

  ul > li, ul > li > button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  ul > li > button + ul {
    display: none;
  }

  ul > li > button + ul > li {
    margin: 0 0.5rem;
  }

  ul > li > a, ul > li > button {
    margin: 0.5rem;
    color: var(--header-logomenu-color-primary);
    text-decoration: none;
    outline: none;
    padding: 0.5rem;
  }

  ul > li > a:hover, ul > li > button:hover, ul li a:focus, ul > li > button:focus {
    border:0;
    border-bottom: var(--header-logomenu-element-hover-border);
    background-color: var(--header-logomenu-element-hover-background-color);
    border-radius: var(--header-logomenu-element-hover-border-radius);
    margin:0.5rem;
    padding: 0.5rem;
  }

  ul > li > button > img {
    margin-left: 0.3rem;
  }

  ul ul > li > a {
    color: var(--header-logomenu-submenu-color);
  }

  .headerLogo {
    height: var(--header-logomenu-height);
    padding-left: 1rem;
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--header-logomenu-background-color);
    color: white;
  }

  .navbar__ul--expanded {
    display: block;
    position: absolute;
    color: var(--header-logomenu-submenu-color);
    background: var(--header-logomenu-submenu-background-color);
    border: 1px outset #ccc;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding: 0 0.5rem;
    margin-left: 0.5rem;
  }

  .navbar__ul--expanded LI {
    display: block;
    margin: 0.5rem 0;
  }

  /* Estilos del menú hamburguesa */
  .hamburger-menu {
    display: none;
    cursor: pointer;
    padding: 1rem 1rem 0 1rem;
  }

  .hamburger-icon {
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bar {
    width: 100%;
    height: 3px;
    background-color: var(--header-logomenu-color-bar);
  }

  @media (max-width: 768px) {
    .menu {
      display: none;
      flex-direction: column;
      color: var(--header-logomenu-menu-color);
      background-color: var(--header-logomenu-menu-background-color);
      position: absolute;
      top: 2rem;
      right: 3rem;
      width: auto;
      text-align: center;
      z-index: 1;
      height: auto;
    }
  
    .menu.show {
      display: flex;
    }
  
    .menu li {
      margin: 10px 0;
    }
  
    .hamburger-menu {
      display: block;
    }

    header {
      justify-content: space-between;
      display:flex;
    }
  }
`;
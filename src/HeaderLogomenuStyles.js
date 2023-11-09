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
    z-index: 100;
    --_header-logomenu-height: var(--header-logomenu-height, 4rem);
    --_header-logomenu-color-primary: var(--header-logomenu-color-primary, turquoise);
    --_header-logomenu-color-secondary: var(--header-logomenu-color-secondary, rgba(255, 77, 0, 0.5));
    --_header-logomenu-color-dark: var(--header-logomenu-color-dark, #000);
    --_header-logomenu-text-color: var(--header-logomenu-text-color, #000);
    --_header-logomenu-background-color: var(--header-logomenu-background-color, #fff);
    --_header-logomenu-border: var(--header-logomenu-border, 0);
    --_header-logomenu-justify-content: var(--header-logomenu-justify-content, space-evenly);
    
    --_header-logomenu-logocontainer-width: var(--header-logomenu-logocontainer-width, 8rem);
    --_header-logomenu-logo-height: var(--header-logomenu-logo-height, 3rem);
    --_header-logomenu-logo-margin: var(--header-logomenu-logo-margin, 0);
    --_header-logomenu-logo-padding: var(--header-logomenu-logo-padding, 0);

    --_header-logomenu-hamburger-bgcolor: var(--header-logomenu-hamburger-bgcolor, transparent);
    --_header-logomenu-hamburger-color: var(--header-logomenu-hamburger-color, turquoise);
    
    --_header-logomenu-options-padding: var(--header-logomenu-options-padding, 0);
    --_header-logomenu-menu-background-color: var(--header-logomenu-menu-background-color, #eee);
    --_header-logomenu-menu-color: var(--header-logomenu-menu-color, #000);
    --_header-logomenu-submenu-background-color: var(--header-logomenu-submenu-background-color, #ddd);
    --_header-logomenu-submenu-color: var(--header-logomenu-submenu-color, #000);
    
    --_header-logomenu-background-color-selected: var(--header-logomenu-background-color-selected, #eee);
    --_header-logomenu-element-hover-border: var(--header-logomenu-element-hover-border, 2px solid var(--_header-logomenu-color-dark));
    --_header-logomenu-element-hover-background-color: var(--header-logomenu-element-hover-background-color, var(--_header-logomenu-background-color-selected));
    --_header-logomenu-element-hover-border-radius: var(--header-logomenu-element-hover-border-radius, 0.5rem);
  
    display: block;
    margin: 0;
    padding: 0;
    color: var(--_header-logomenu-text-color);
    visibility: hidden;
  }

  header {
    margin:0;
    padding:0;
    display: flex;
    justify-content: var(--_header-logomenu-justify-content);
    max-width: 100vw;
    max-height: var(--_header-logomenu-height);
    background-color: var(--_header-logomenu-background-color);
    border: var(--_header-logomenu-border);
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

  ul > li {
    display: flex;
    justify-content: flex-start;
    line-height: 1.5rem;
  }

  ul > li > button + ul {
    display: none;
  }

  ul > li > button + ul > li {
    margin: 0 0.5rem;
  }

  ul > li > a, ul > li > button {
    margin: 0.5rem;
    color: var(--_header-logomenu-color-primary);
    text-decoration: none;
    outline: none;
    padding: 0.5rem;
  }

  ul > li > a:hover, ul > li > button:hover, ul li a:focus, ul > li > button:focus {
    border:0;
    border-bottom: var(--_header-logomenu-element-hover-border);
    background-color: var(--_header-logomenu-element-hover-background-color);
    border-radius: var(--_header-logomenu-element-hover-border-radius);
  }

  ul > li > button > img {
    margin-left: 0.3rem;
  }

  ul ul > li > a {
    color: var(--_header-logomenu-submenu-color);
    padding: 0.1rem 0;
  }
  
  .headerLogoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: var(--_header-logomenu-logocontainer-width);
    max-height: var(--_header-logomenu-height);
    margin: 0;
    padding: 0;
  }

  .headerLogo {
    max-width: var(--_header-logomenu-logocontainer-width);
    max-height: var(--_header-logomenu-height);
    height: var(--_header-logomenu-logo-height);
    padding: var(--_header-logomenu-logo-padding);
    margin: var(--_header-logomenu-logo-margin);
  }
  
  .menuTitle {
    color: var(--_header-logomenu-color-secondary);
    font-size: 1.5rem;
    margin:0;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--_header-logomenu-height);
  }

  .menuTitle a {
    text-decoration: none;
    color: var(--_header-logomenu-color-secondary);
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: var(--_header-logomenu-options-padding);
    background-color: var(--_header-logomenu-background-color);
    color: white;
  }

  .navbar__ul--expanded {
    display: block;
    position: absolute;
    color: var(--_header-logomenu-submenu-color);
    background: var(--_header-logomenu-submenu-background-color);
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
    background-color: var(--_header-logomenu-hamburger-bgcolor);
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
    background-color: var(--_header-logomenu-hamburger-color);
  }

  @media (max-width: 768px) {
    ul > li > a, ul > li > button {
      color: var(--_header-logomenu-submenu-color);
      background-color: var(--_header-logomenu-submenu-background-color);
    }

    .menu {
      display: none;
      flex-direction: column;
      color: var(--_header-logomenu-submenu-color);
      background-color: var(--_header-logomenu-submenu-background-color);
      position: absolute;
      top: 1rem;
      right: 0.5rem;
      max-width: 12rem;
      text-align: center;
      z-index: 1;
      height: auto;
      margin: 0px;
      padding: 1rem;
    }
  
    .show {
      display: flex!important;
    }
  
    .menu li {
      margin-bottom: 0;
    }
  
    .hamburger-menu {
      display: block;
    }

    header {
      // justify-content: space-between;
      // display:flex;
      // width: 103vw;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;      
    }

    ul > li > button, ul > li > ul {
      margin:0;
    }

    .headerLogo {
      grid-area: 1 / 1 / 2 / 2;
      width: 100%;
      height: auto;
      object-fit: contain;
      margin: 0 auto;
    }
    .menuTitle {
      grid-area: 1 / 2 / 2 / 5; 
    }
    .hamburger-menu {
      grid-area: 1 / 5 / 2 / 6;
      height: var(--firebase-loginbutton_btn-photo-size);
    }
    .navbar-container {
      display: none;
    }
    .navbar {
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
    }
    .navbar__button {
      margin: 0.5rem 0;
    }
  }
`;
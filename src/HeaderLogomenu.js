/* eslint-disable lit-a11y/tabindex-no-positive */
import { html, LitElement } from 'lit';
import { HeaderLogomenuStyles } from './HeaderLogomenuStyles.js';

export class HeaderLogomenu extends LitElement {
  static styles = [HeaderLogomenuStyles];

  static properties = {
    logo: { type: String },
    logoUrl: { type: String, attribute: 'logo-url' },
    menuTitle: { type: String, attribute: 'menu-title' },
    fillArrowColor: { type: String },
  };

  constructor() {
    super();
    this.logo = 'about:blank';
    this.logoUrl = 'about:blank';
    this.menuTitle = 'TITLE';
    if (!this.querySelector('*')) {
      this.appendChild(document.createElement('div'));
    }
    this.content = this.querySelector('*');
    this.content.classList.add('navbar-container');
    this.content.setAttribute('role', 'navigation');
    this.content.setAttribute('aria-label', 'menu de navegación');
    this.fillArrowColor = '#000000';
    this.arrowDown = `<svg fill="@COLOR@" height="800px" width="800px" version="1.1" id="buttonArrow" 
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
      <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
      </svg>`;
    this.arrowUp = `<svg fill="@COLOR@" height="800px" width="800px" version="1.1" id="buttonArrow" 
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 330 330" xml:space="preserve">
      <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
        l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
        C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
      </svg>`;
    this._showMenu = this._showMenu.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    // Insertar antes del primer UL un div
    const div = html`
    <div class="hamburger-menu" tabindex="2">
      <div class="hamburger-icon">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>      
    `;
    this.menuHamburger = [div];

    const firstUL = this.content.querySelector('ul');
    if (firstUL) {
      firstUL.classList.add('menu');
    }

    this.content.querySelectorAll('button').forEach((button) => {
      // add image to the right of the button with a arrow and add aria-expanded="false"
      const arrow = document.createElement('img');
      const arrowDown = this.arrowDown.replace('@COLOR@', this.fillArrowColor);
      arrow.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(arrowDown)}`;
      arrow.width = 14;
      arrow.alt = '';
      arrow.classList.add('navbar__arrow');
      button.appendChild(arrow);
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', `${button.parentElement.id}-submenu`);
      button.parentElement.querySelector('ul').setAttribute('id', `${button.parentElement.id}-submenu`);
    });

    this.content.querySelectorAll('ul > li > button').forEach((item) => {
      item.addEventListener('click', (e) => this._showMenu(e, item));
    });

    this.content.querySelectorAll('a').forEach((item) => {
      item.addEventListener('click', (e) => {
        this._closeAllSubMenus(e);
      });
    });

    this.content.querySelectorAll('ul').forEach((item) => {
      if (item.querySelectorAll('ul').length === 0) {
        item.addEventListener('mouseleave', (e) => {
          setTimeout(() => {
            this._closeAllSubMenus(e);
          }, 500);
        });
        item.addEventListener('focusout', (e) => {
          setTimeout(() => {
            this._closeAllSubMenus(e);
          }, 1500);
        });
      }
    });

    this.content.querySelectorAll('ul li').forEach((item) => {
      if (item.querySelector('button')) {
        item.querySelector('button').setAttribute('tabIndex', '0');
      } else if (item.querySelector('a')) {
        item.querySelector('a').setAttribute('tabIndex', '0');
      }
    });
  }

  _expandMenu(parentUL) {
    const arrowUp = this.arrowUp.replace('@COLOR@', this.fillArrowColor);
    const ul = parentUL.querySelector('ul');
    const arrow = parentUL.querySelector('img');
    const button = parentUL.querySelector('button');
    arrow.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(arrowUp)}`;
    ul.classList.add('navbar__ul--expanded');
    button.setAttribute('aria-expanded', 'true');
    button.classList.add('selected');
  }

  _contractMenu(parentUL) {
    const arrowDown = this.arrowDown.replace('@COLOR@', this.fillArrowColor);
    const ul = parentUL.querySelector('ul');
    const arrow = parentUL.querySelector('img');
    const button = parentUL.querySelector('button');
    arrow.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(arrowDown)}`;
    ul.classList.remove('navbar__ul--expanded');
    button.classList.remove('selected');
    button.setAttribute('aria-expanded', false);
  }

  _closeAllSubMenus() {
    const ulsWithLiAndButton = this.shadowRoot.querySelectorAll('ul li button');
    ulsWithLiAndButton.forEach(button => {
      const parentUL = button.parentElement;
      const item = parentUL.querySelector('ul');
      if (item) {
        this._contractMenu(parentUL);
      }
    });
  }

  _showMenu(e) {
    const parentUL = (e.target.tagName === 'BUTTON') ? e.target.parentElement : e.target.parentElement.parentElement;
    const button = parentUL.querySelector('button');
    const ariaExpanded = button.getAttribute('aria-expanded');
    if (ariaExpanded === 'false') {
      this._closeAllSubMenus();
      this._expandMenu(parentUL);
    } else {
      this._contractMenu(parentUL);
    }
  }

  static rgbToHex(rgb) {
    const values = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!values) { return rgb; }
    const r = parseInt(values[1], 10);
    const g = parseInt(values[2], 10);
    const b = parseInt(values[3], 10);
    // eslint-disable-next-line no-bitwise
    const hex = `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
    return hex;
  }

  firstUpdated() {
    this.style.visibility = 'visible';
    const hamburgerMenu = this.shadowRoot.querySelector('.hamburger-menu');
    const menu = this.shadowRoot.querySelector('.menu');

    hamburgerMenu.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
    hamburgerMenu.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        menu.classList.toggle('show');
        this.shadowRoot.querySelector('.menu LI').focus();
      }
    });
    this.shadowRoot.querySelector('header').addEventListener('keypress', (e) => {
      if (e.keyCode === 27) {
        menu.classList.remove('show');
      }
    });

    const button = this.shadowRoot.querySelector('button');
    if (button) {
      const computedStyle = getComputedStyle(button);
      this.fillArrowColor = HeaderLogomenu.rgbToHex(computedStyle.color);
      const arrows = this.shadowRoot.querySelectorAll('ul > li > button > img');
      arrows.forEach((arrow) => {
        const arrowDown = this.arrowDown.replace('@COLOR@', this.fillArrowColor);
        // eslint-disable-next-line no-param-reassign
        arrow.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(arrowDown)}`;
      });
    }
  }

  render() {
    return html`
      <header>
        <a href="${this.logoUrl}" tabindex="1">
          <img class="headerLogo" src="${this.logo}" alt="header logo" />
        </a>
        <h1 class="menuTitle">${this.menuTitle}</h1>
        ${this.content}
        ${this.menuHamburger.map((item) => html`${item}`)}
      </header>
    `;
  }
}

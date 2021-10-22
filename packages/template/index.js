import '../navigation/index.js';
import '../sidebar/index.js';
import '../footer/index.js';

class FabricDocsTemplate extends HTMLElement {
  constructor() {
    super();

    const fabricStylesTemplate = document.createElement('template');
    fabricStylesTemplate.innerHTML = `
      <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"
      />
      <style>
        :host { display: block; }
        .doc-main-menu {
            grid-area: sitemenu;
        }
        .doc-left-menu {
            grid-area: sidebar;
        }
        .doc-main {
            grid-area: main;
        }
        .doc-grid {
            display: block;
            position: relative;
            top: 49px;
        }
        @media screen and (min-width:990px) {
            .doc-grid {
                display: grid;
                grid-template-columns: 250px 1fr;
                grid-template-rows: auto 1fr;
                grid-template-areas: "sidebar main"
            }
            .doc-grid {
                top: 55px;
            }
        }
        .doc-front-page-banner {
            background: linear-gradient(94.46deg, #0D55C8 3.76%, #1593E9 99.18%);
            padding: 60px 0px;
        }
      </style>
      <header>
        <f-docs-navigation></f-docs-navigation>
        <div aria-owns="sidebar-wrapper"></div>
      </header>
      <div class="doc-grid min-h-screen">
        <div id="sidebar-wrapper">
          <f-docs-sidebar>${document.querySelector(
            '[data-for="sidebar"]'
          )}</f-docs-sidebar>
        </div>
        <div class="doc-main">
          ${
            !!document.querySelector(['[slot="banner"]']) &&
            '/'.includes(document.location.pathname)
              ? '<div class="doc-front-page-banner"><slot name="banner"></slot></div>'
              : ''
          }
          ${
            !!document.querySelector(['[slot="content"]'])
              ? `<div class="mx-auto p-12 md:p-32" style="max-width:1024px">
                  <slot name="content"></slot>
                  ${
                    document.querySelector('[data-for="footer"]')
                      ? `<f-docs-footer>${document.querySelector(
                          '[data-for="footer"]'
                        )}</f-docs-footer>`
                      : ''
                  }
                </div>`
              : ''
          }
        </div>
      </div>
    `;

    this.attachShadow({ mode: 'open' }).appendChild(
      fabricStylesTemplate.content
    );

    document.querySelector('[data-for="sidebar"]').remove();
    document.querySelector('[data-for="footer"]').remove();
  }
}

if (!customElements.get('f-docs-template')) {
  customElements.define('f-docs-template', FabricDocsTemplate);
}

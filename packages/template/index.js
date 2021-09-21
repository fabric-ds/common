class FabricDocsTemplate extends HTMLElement {
  constructor() {
    super();

    const fabricStylesTemplate = document.createElement("template");
    fabricStylesTemplate.innerHTML = `
      <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.finn.no/pkg/@finn-no/fabric-css/v0/fabric.min.css"
      />
      <style>
        :host { display: block; }
        .doc-logo {
            grid-area: logo;
        }
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
        }
        @media screen and (min-width:990px) {
            .doc-grid {
                display: grid;
                grid-template-columns: 320px 1fr;
                grid-template-rows: auto 1fr;
                grid-template-areas:
                    "logo sitemenu"
                    "sidebar main"
            }
        }
        .doc-front-page-banner {
            background: linear-gradient(94.46deg, #0D55C8 3.76%, #1593E9 99.18%);
            padding: 60px 0px;
        }
      </style>
      <main class="doc-grid min-h-screen">
        <div class="doc-logo border-b">
          <slot name="logo"></slot>
        </div>
        <nav class="doc-main-menu border-b">
          <slot name="navigation"></slot>
        </nav>
        <nav class="doc-left-menu bg-gray-50 p-32 border-r">
          <slot name="sidebar"></slot>
        </nav>
        <section class="doc-main">
          <div class="doc-front-page-banner">
            <slot name="banner"></slot>
          </div>
          <div class="mx-auto p-32" style="max-width:1024px">
            <slot name="content"></slot>
          </div>
        </section>
      </main>
    `;

    this.attachShadow({ mode: "open" }).appendChild(
      fabricStylesTemplate.content
    );
  }
}

if (!customElements.get("f-docs-template")) {
  customElements.define("f-docs-template", FabricDocsTemplate);
}

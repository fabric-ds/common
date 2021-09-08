class FabricDocsSidebar extends HTMLElement {
  constructor() {
    super();

    const fabricStylesTemplate = document.createElement("template");
    fabricStylesTemplate.innerHTML = `
            <style>:host { display: block; }</style>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://assets.finn.no/pkg/@finn-no/fabric-css/v0/fabric.min.css"
            />
            <section>
              <input type="text" placeholder="Search">
              <nav>
                <slot></slot>
              </nav>
            </section>
        `;

    this.attachShadow({ mode: "open" }).appendChild(
      fabricStylesTemplate.content
    );
  }
}

class FabricDocsSidebarSection extends HTMLElement {
  constructor() {
    super();

    const fabricStylesTemplate = document.createElement("template");
    fabricStylesTemplate.innerHTML = `
            <style>:host { display: block; }</style>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://assets.finn.no/pkg/@finn-no/fabric-css/v0/fabric.min.css"
            />
            <section>
              <slot name="title"></slot>
              <slot name="items"></slot>
            </section>
        `;

    this.attachShadow({ mode: "open" }).appendChild(
      fabricStylesTemplate.content
    );
  }
}

if (!customElements.get("f-docs-sidebar")) {
  customElements.define("f-docs-sidebar", FabricDocsSidebar);
}

if (!customElements.get("f-docs-sidebar-section")) {
  customElements.define("f-docs-sidebar-section", FabricDocsSidebarSection);
}

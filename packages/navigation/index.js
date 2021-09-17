class FabricDocsNavigation extends HTMLElement {
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
            <h2 class="h4 mb-0 pt-16 pb-0 pl-32 lg:hidden">Fabric sites</h2>
            <ul class="lg:flex mb-24 lg:mb-0 pl-24 lg:pl-16 pt-4 lg:pt-0 mx-auto" style="max-width:1024px">
              <li><a href="https://opensource.finn.no/fabric-design" class="inline-block text-gray-900 px-16 lg:py-16">Design</a></li>
              <li><a href="https://opensource.finn.no/fabric-css" class="inline-block text-gray-900 px-16 lg:py-16">CSS</a></li>
              <li><a href="https://opensource.finn.no/fabric-react" class="inline-block text-gray-900 px-16 lg:py-16">React</a></li>
              <li><a href="https://opensource.finn.no/fabric-vue" class="inline-block text-gray-900 px-16 lg:py-16">Vue</a></li>
              <li><a href="https://opensource.finn.no/fabric-elements" class="inline-block text-gray-900 px-16 lg:py-16">Elements</a></li>
            </ul>
        `;

    this.attachShadow({ mode: "open" }).appendChild(
      fabricStylesTemplate.content
    );
  }
}

if (!customElements.get("f-docs-navigation")) {
  customElements.define("f-docs-navigation", FabricDocsNavigation);
}

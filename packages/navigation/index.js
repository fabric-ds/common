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
            <nav class="flex">
                <h1 class="h4"><img src="logo url here" alt="" />Fabric</h1>
                <ul class="flex">
                    <li><a class="px-24 py-16 text-gray-700" href="https://opensource.finn.no/fabric-design">Design</a></li>
                    <li><a class="px-24 py-16 text-gray-700" href="https://opensource.finn.no/fabric-css">CSS</a></li>
                    <li><a class="px-24 py-16 text-gray-700" href="https://opensource.finn.no/fabric-react">React</a></li>
                    <li><a class="px-24 py-16 text-gray-700" href="https://opensource.finn.no/fabric-vue">Vue</a></li>
                    <li><a class="px-24 py-16 text-gray-700" href="https://opensource.finn.no/fabric-elements">Elements</a></li>
                </ul>
            </nav>
        `;

    this.attachShadow({ mode: "open" }).appendChild(
      fabricStylesTemplate.content
    );
  }
}

if (!customElements.get("f-docs-navigation")) {
  customElements.define("f-docs-navigation", FabricDocsNavigation);
}

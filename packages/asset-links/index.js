const figmaLogo = () => `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 300"
    width="32"
    height="32"
  >
    <path d="M50 300a50 50 0 0050-50v-50H50a50 50 0 000 100z" fill="#0acf83" />
    <path
      d="M0 150a50 50 0 0150-50h50v100H50a50 50 0 01-50-50z"
      fill="#a259ff"
    />
    <path d="M0 50A50 50 0 0150 0h50v100H50A50 50 0 010 50z" fill="#f24e1e" />
    <path d="M100 0h50a50 50 0 010 100h-50V0z" fill="#ff7262" />
    <path d="M200 150a50 50 0 11-100 0 50 50 0 01100 0z" fill="#1abcfe" />
  </svg>
`;

const reactLogo = () => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" >
  <g fill="#61DAFB">
    <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4a43.8 43.8 0 00-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9a487.8 487.8 0 00-41.6-50c32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9a467 467 0 00-63.6 11c-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4a44 44 0 0022.5 5.6c27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7a450.4 450.4 0 01-13.5 39.5 473.3 473.3 0 00-27.5-47.4c14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5a532.7 532.7 0 01-24.1 38.2 520.3 520.3 0 01-90.2.1 551.2 551.2 0 01-45-77.8 521.5 521.5 0 0144.8-78.1 520.3 520.3 0 0190.2-.1 551.2 551.2 0 0145 77.8 560 560 0 01-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8a448.8 448.8 0 01-41.2 8 552.4 552.4 0 0027.4-47.8zM421.2 430a412.3 412.3 0 01-27.8-32 619 619 0 0055.3 0c-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9a451.2 451.2 0 01-41-7.9c3.7-12.9 8.3-26.2 13.5-39.5a473.3 473.3 0 0027.5 47.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32a619 619 0 00-55.3 0c9-11.7 18.3-22.4 27.5-32zm-74 58.9a552.4 552.4 0 00-27.4 47.7c-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9a473.5 473.5 0 00-22.2 60.6c-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9a487.8 487.8 0 0041.6 50c-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9a467 467 0 0063.6-11 280 280 0 015.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9a473.5 473.5 0 0022.2-60.6c9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
    <circle cx="420.9" cy="296.5" r="45.7"/>
    <path d="M520.5 78.1z"/>
  </g>
</svg>
`;

const vueLogo = () => `
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 196.32 170.02"
  width="32"
  height="32"
>
  <path fill="#42b883" d="M120.83 0L98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z"/>
  <path fill="#35495e" d="M120.83 0L98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z"/>
</svg>
`;

class FabricDocsAssetLinks extends HTMLElement {
  constructor() {
    super();

    let urls = [];
    try {
      urls = JSON.parse(this.querySelector("script").innerText);
    } catch (e) {
      // noop
    }

    let assetLinksMarkup = "";
    for (const url of urls) {
      let logo = "";
      let text = "";

      if (url.includes("figma.com")) {
        text = "View in Figma";
        logo = figmaLogo();
      } else if (url.includes("fabric-react")) {
        text = "View in Fabric React";
        logo = reactLogo();
      } else if (url.includes("fabric-vue")) {
        text = "View in Fabric Vue";
        logo = vueLogo();
      }

      assetLinksMarkup += `
      <a
        href=${url}
        class="border rounded-4 inline-flex items-center align-middle no-underline hover:no-underline text-gray-800 mr-8"
      >
        <div class="w-48 h-48 p-8 border-r flex">
          ${logo}
        </div>
        <div class="px-16">${text}</div>
      </a>
      `;
    }

    const fabricStylesTemplate = document.createElement("template");
    fabricStylesTemplate.innerHTML = `
      <style>:host { display: block; }</style>
      <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.finn.no/pkg/@finn-no/fabric-css/v0/fabric.min.css"
      />
      <div class="my-16 max-w-max">
        ${assetLinksMarkup}
      </div>
    `;

    this.attachShadow({ mode: "open" }).appendChild(
      fabricStylesTemplate.content
    );
  }
}

if (!customElements.get("f-docs-asset-links")) {
  customElements.define("f-docs-asset-links", FabricDocsAssetLinks);
}
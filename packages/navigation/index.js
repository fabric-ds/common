class FabricDocsNavigation extends HTMLElement {
  constructor() {
    super();

    const sites = [
      {
        name: 'Design',
        href: '/design',
      },
      {
        name: 'CSS',
        href: '/css',
      },
      {
        name: 'React',
        href: '/react',
      },
      {
        name: 'Vue',
        href: '/vue',
      },
      {
        name: 'Elements',
        href: '/elements',
      },
    ];

    const fabricStylesTemplate = document.createElement('template');
    fabricStylesTemplate.innerHTML = `
        <style>:host { display: block; }</style>
        <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.finn.no/pkg/@finn-no/fabric-css/v0/fabric.min.css"
        />
        <nav class="doc-main-menu border-b flex static bg-white fixed left-0 right-0 z-10" aria-label="Topp">
          <button id="hamburger-menu" class="flex lg:hidden p-12">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 1.50299C1.83579 1.50299 1.5 1.83878 1.5 2.25299V3.75299C1.5 4.1672 1.83579 4.50299 2.25 4.50299H21.75C22.1642 4.50299 22.5 4.1672 22.5 3.75299V2.25299C22.5 1.83878 22.1642 1.50299 21.75 1.50299H2.25ZM0 2.25299C0 1.01035 1.00736 0.00299072 2.25 0.00299072H21.75C22.9926 0.00299072 24 1.01035 24 2.25299V3.75299C24 4.99563 22.9926 6.00299 21.75 6.00299H2.25C1.00736 6.00299 0 4.99563 0 3.75299V2.25299ZM2.25 10.503C1.83579 10.503 1.5 10.8388 1.5 11.253V12.753C1.5 13.1672 1.83579 13.503 2.25 13.503H21.75C22.1642 13.503 22.5 13.1672 22.5 12.753V11.253C22.5 10.8388 22.1642 10.503 21.75 10.503H2.25ZM0 11.253C0 10.0104 1.00736 9.00299 2.25 9.00299H21.75C22.9926 9.00299 24 10.0104 24 11.253V12.753C24 13.9956 22.9926 15.003 21.75 15.003H2.25C1.00736 15.003 0 13.9956 0 12.753V11.253ZM1.5 20.253C1.5 19.8388 1.83579 19.503 2.25 19.503H21.75C22.1642 19.503 22.5 19.8388 22.5 20.253V21.753C22.5 22.1672 22.1642 22.503 21.75 22.503H2.25C1.83579 22.503 1.5 22.1672 1.5 21.753V20.253ZM2.25 18.003C1.00736 18.003 0 19.0103 0 20.253V21.753C0 22.9956 1.00736 24.003 2.25 24.003H21.75C22.9926 24.003 24 22.9956 24 21.753V20.253C24 19.0103 22.9926 18.003 21.75 18.003H2.25Z" fill="#474445"/>
              </g>
              <defs>
                <clipPath>
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          <div class="hidden lg:flex items-center pl-16" style="width: 250px;">
            <a href="${sites[0].href}/" aria-current="${
      document.location.href.includes(sites[0].href) ? 'true' : 'false'
    }" aria-label="Fabric Design forside" title="Fabric Design forside">
              <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Fabric Docs</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.252 2.08777H3.02282C2.50963 2.08777 2.09224 2.5045 2.09224 3.01664V28.9834C2.09224 29.4955 2.50963 29.9123 3.02282 29.9123H29.9738V20.7711C29.9738 10.469 21.5753 2.08777 11.252 2.08777Z" fill="#0063FB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M88.9772 2.08777H32.9965C32.4833 2.08777 32.0657 2.5045 32.0657 3.01664V29.9121H88.9772C89.4904 29.9121 89.908 29.4955 89.908 28.9834V3.01664C89.908 2.5045 89.4904 2.08777 88.9772 2.08777Z" fill="#06BEFB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.09214 28.9835V3.01672C2.09214 2.50457 2.50973 2.08785 3.02292 2.08785H11.2519C21.5752 2.08785 29.9737 10.4691 29.9737 20.7712V29.9122H3.02292C2.50973 29.9122 2.09214 29.4956 2.09214 28.9835ZM89.9079 28.9835C89.9079 29.4956 89.4903 29.9122 88.9771 29.9122H32.0658V3.01672C32.0658 2.50457 32.4834 2.08785 32.9966 2.08785H88.9771C89.4903 2.08785 89.9079 2.50457 89.9079 3.01672V28.9835ZM88.9771 0H32.9966C31.3297 0 29.9737 1.35326 29.9737 3.01672V11.7009C26.5933 4.78019 19.4719 0 11.2519 0H3.02292C1.35604 0 0 1.35326 0 3.01672V28.9835C0 30.6467 1.35604 32 3.02292 32H88.9771C90.644 32 92 30.6467 92 28.9835V3.01672C92 1.35326 90.644 0 88.9771 0Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5072 10.575H49.0454C49.373 10.575 49.6385 10.8399 49.6385 11.1668V13.023C49.6385 13.3499 49.373 13.6149 49.0454 13.6149H44.2116V16.0639H48.0603C48.3878 16.0639 48.6534 16.3288 48.6534 16.6557V18.236C48.6534 18.5629 48.3878 18.8279 48.0603 18.8279H44.2116V20.8333C44.2116 21.1602 43.9461 21.425 43.6186 21.425H41.5072C41.1797 21.425 40.9141 21.1602 40.9141 20.8333V11.1668C40.9141 10.8399 41.1797 10.575 41.5072 10.575ZM52.9221 10.575H55.0335C55.361 10.575 55.6265 10.8399 55.6265 11.1668V20.8333C55.6265 21.1602 55.361 21.4252 55.0335 21.4252H52.9221C52.5946 21.4252 52.329 21.1602 52.329 20.8333V11.1668C52.329 10.8399 52.5946 10.575 52.9221 10.575ZM80.4666 10.575H78.355C78.0277 10.575 77.7622 10.8399 77.7622 11.1668V15.9068L74.4607 10.9285C74.3142 10.7077 74.0665 10.575 73.8012 10.575H72.1792C71.8517 10.575 71.5862 10.8399 71.5862 11.1668V20.8333C71.5862 21.1602 71.8517 21.425 72.1792 21.425H74.2907C74.6183 21.425 74.8836 21.1602 74.8836 20.8333V16.1482L78.1129 21.0682C78.259 21.2909 78.5077 21.425 78.7743 21.425H80.4666C80.7941 21.425 81.0596 21.1602 81.0596 20.8333V11.1668C81.0596 10.8399 80.7941 10.575 80.4666 10.575ZM65.6385 10.575H67.75C68.0776 10.575 68.3431 10.8399 68.3431 11.1668V20.8333C68.3431 21.1602 68.0776 21.425 67.75 21.425H66.0578C65.7911 21.425 65.5425 21.2909 65.3964 21.0682L62.1671 16.1482V20.8333C62.1671 21.1602 61.9016 21.425 61.5742 21.425H59.4627C59.1352 21.425 58.8696 21.1602 58.8696 20.8333V11.1668C58.8696 10.8399 59.1352 10.575 59.4627 10.575H61.0846C61.35 10.575 61.5976 10.7077 61.7441 10.9285L65.0454 15.9068V11.1668C65.0454 10.8399 65.311 10.575 65.6385 10.575Z" fill="white"/>
              </svg>
            </a>
          </div>
          <ul class="hidden lg:flex items-center mb-0">
          ${sites
            .map(
              (s) =>
                `<li><a href="${s.href}" class="${
                  document.location.href.includes(s.href)
                    ? 'border-t-4 border-blue-500'
                    : ''
                } inline-block text-gray-900 px-16 py-16" aria-current="${
                  document.location.href.includes(s.href) ? 'true' : 'false'
                }" aria-label="Fabric ${s.name}" title="Fabric ${
                  s.name
                }" rel="nofollow">${s.name}</a></li>`
            )
            .join('')}
          </ul>
        </nav>
    `;

    this.attachShadow({ mode: 'open' }).appendChild(
      fabricStylesTemplate.content
    );

    const button = this.shadowRoot.querySelector('#hamburger-menu');
    const sidebar = document
      .querySelector('f-docs-template')
      .shadowRoot.querySelector('f-docs-sidebar');

    button.addEventListener('click', () => {
      sidebar.dispatchEvent(new Event('hamburger-click'));
    });
  }
}

if (!customElements.get('f-docs-navigation')) {
  customElements.define('f-docs-navigation', FabricDocsNavigation);
}

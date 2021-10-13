class FabricDocsNavigation extends HTMLElement {
  constructor() {
    super();

    const sites = [
      {
        name: 'Design',
        href: 'https://www.fabric-ds.io',
      },
      {
        name: 'CSS',
        href: 'https://css.fabric-ds.io',
      },
      {
        name: 'React',
        href: 'https://react.fabric-ds.io',
      },
      {
        name: 'Vue',
        href: 'https://vue.fabric-ds.io',
      },
      {
        name: 'Elements',
        href: 'https://elements.fabric-ds.io',
      },
    ];

    const fabricStylesTemplate = document.createElement('template');
    fabricStylesTemplate.innerHTML = `
        <style>:host { display: block; }</style>
        <link
            rel="stylesheet"
            type="text/css"
            href="https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"
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
      JSON.stringify(document.location.href.includes(sites[0].href))
    }" aria-label="Fabric Design forside" title="Fabric Design forside" class="flex items-center" style="text-decoration: none;">
            <svg width="48" height="25" viewBox="0 0 48 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Fabric Docs</title>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M46.3812 22.6433V2.35678C46.3812 1.95667 46.0581 1.6311 45.661 1.6311H25.5332C25.1361 1.6311 24.813 1.95667 24.813 2.35678V23.3688H45.661C46.0581 23.3688 46.3812 23.0434 46.3812 22.6433Z" fill="#00BFFB"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70709 1.6311H2.33924C1.94212 1.6311 1.61914 1.95667 1.61914 2.35678V22.6433C1.61914 23.0434 1.94212 23.369 2.33924 23.369H23.1942V16.2275C23.1942 8.17898 16.6954 1.6311 8.70709 1.6311Z" fill="#006CFB"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.61891 22.6433V2.35681C1.61891 1.9567 1.94204 1.63113 2.33916 1.63113H8.70686C16.6951 1.63113 23.194 8.17901 23.194 16.2275V23.3689H2.33916C1.94204 23.3689 1.61891 23.0435 1.61891 22.6433ZM46.3811 22.6433C46.3811 23.0435 46.0579 23.3689 45.6608 23.3689H24.8129V2.35681C24.8129 1.9567 25.1361 1.63113 25.5332 1.63113H45.6608C46.0579 1.63113 46.3811 1.9567 46.3811 2.35681V22.6433ZM45.6608 0H25.5332C24.2434 0 23.194 1.05723 23.194 2.35681V9.14134C20.5782 3.73452 15.0676 0 8.70688 0H2.33918C1.04932 0 0 1.05723 0 2.35681V22.6433C0 23.9428 1.04932 25 2.33918 25H45.6608C46.9507 25 48 23.9428 48 22.6433V2.35681C48 1.05723 46.9507 0 45.6608 0Z" fill="white"/>
            </svg>
            <span class="h3 text-gray-700 ml-12 mt-2">Fabric</span>
            </a>
          </div>
          <ul class="hidden lg:flex items-center mb-0">
          ${sites
            .map(
              (s) =>
                `<li><a href="${s.href}" class="border-t-4 ${
                  document.location.href.includes(s.href)
                    ? 'border-blue-500'
                    : 'border-transparent'
                } inline-block text-gray-900 px-16 pt-12 pb-16" aria-current="${
                  JSON.stringify(document.location.href.includes(s.href))
                }" aria-label="Fabric ${s.name}" title="Fabric ${
                  s.name
                }" rel="nofollow">${s.name}</a></li>`
            )
            .join('')}
          </ul>
          <p class="absolute right-16 top-12 bg-yellow-100 text-gray-700 p-4 px-8 rounded-4 text-12 lg:text-14 lg:top-14">
            Beta v1.0
          </p>
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

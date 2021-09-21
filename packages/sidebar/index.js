class FabricDocsSidebar extends HTMLElement {
  constructor() {
    super();

    const fabricStylesTemplate = document.createElement('template');
    fabricStylesTemplate.innerHTML = `
      <style>:host { display: block; }</style>
      <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.finn.no/pkg/@finn-no/fabric-css/v0/fabric.min.css"
      />
      <section style="width: 250px;" class="doc-left-menu bg-gray-50 h-screen p-20">
        <div class="input px-6 relative">
          <svg class="absolute" style="top: 15; left: 15;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.03166 8.50191C0.965807 5.99396 2.13486 3.09682 4.64281 2.03097C7.15076 0.965117 10.0479 2.13417 11.1137 4.64212C12.1796 7.15007 11.0106 10.0472 8.5026 11.1131C5.99465 12.1789 3.09751 11.0099 2.03166 8.50191ZM4.05611 0.650469C0.785728 2.04035 -0.738719 5.81823 0.651159 9.08861C2.04104 12.359 5.81892 13.8834 9.0893 12.4936C9.62952 12.264 10.1221 11.9692 10.5618 11.6224L14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7625 15.5303 14.4696L11.6222 10.5615C13.0306 8.77556 13.4466 6.29635 12.4943 4.05542C11.1044 0.785039 7.32649 -0.73941 4.05611 0.650469Z" fill="#767676"/>
          </svg>
          <input style="padding-left: 30px;" type="text" placeholder="Search">
        </div>
        <nav id="fabric-docs-sidebar" aria-orientation="vertical"></nav>
      </section>
  `;

    this.attachShadow({ mode: 'open' }).appendChild(
      fabricStylesTemplate.content
    );

    this.menuIds = [];
    this.entries = JSON.parse(
      document.querySelector('script[type="application/json"]').textContent
    );
    this.innerHTML = '';

    this.entries.items = this.entries.items.map((i) => ({
      ...i,
      open: !!i.items?.filter((i) => document.location.href.includes(i.href))[0]
        ? !i.open
        : i.open,
    }));

    this.render(true);
  }

  render(first) {
    this.shadowRoot.querySelector('#fabric-docs-sidebar').innerHTML = `
    <h3 class="text-12 text-gray-500 mt-20 px-8" style="font-weight: 100;">${
      this.entries.category.toUpperCase() || ''
    }</h3>
    <ul>
    ${this.entries.items
      .map((i) => {
        let id = i.id || '';
        if (first) {
          id = Math.random().toString(36).substr(2, 9);
          this.menuIds.push(id);
          this.entries.items[this.entries.items.indexOf(i)].id = id;
        }

        return `<li class="my-4">
          <a id="${id}" aria-label="${i.title}" ${
          i.open ? 'aria-controls="' + id + '-child-list"' : ''
        } tabindex="0" class="w-full inline-flex align-center hover:bg-gray-200 text-14 text-gray-700 font-bold py-6 px-8" style="border-radius: 4px; text-decoration: none;" role="link" aria-expanded="${
          i.open
        }" target="_self">${i.title}</a>
          ${
            i.items
              ? `
          <div id="${id}-child" class="${
                  i.open ? 'block' : 'hidden'
                }" aria-hidden="${!i.open}">
            <ul id="${id}-child-list">
              ${i.items
                .map(
                  (i) =>
                    `<li><a aria-label="${i.title}" aria-current="${
                      document.location.href.includes(i.href) ? 'true' : 'false'
                    }" title="${i.title}" href="${
                      i.href
                    }" class="w-full inline-flex align-center hover:bg-gray-200 font-light text-14 text-gray-700 py-6 pl-16 my-2 ${
                      document.location.href.includes(i.href)
                        ? 'bg-gray-200'
                        : ''
                    }" style="border-radius: 4px; text-decoration: none;" target="_self">${
                      i.title
                    }</a></li>`
                )
                .join('')}
            </ul>
          </div>`
              : ''
          }
        </li>`;
      })
      .join('')}
    </ul>
    `;

    for (const i in this.menuIds) {
      const id = this.menuIds[i];

      this.shadowRoot.getElementById(id).addEventListener('click', () => {
        const e = this.entries.items.filter((e) => e.id === id)[0];

        this.entries.items = this.entries.items.map((i) => ({
          ...i,
          open: e.id === i.id ? !i.open : i.open,
        }));

        this.render();
      });
    }
  }
}

if (!customElements.get('f-docs-sidebar')) {
  customElements.define('f-docs-sidebar', FabricDocsSidebar);
}

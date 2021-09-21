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
      <section style="width: 250px;" class="doc-left-menu bg-gray-50 h-screen p-20 border-r">
        <div class="input px-6">
          <input type="text" placeholder="Search">
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
    <h3 class="text-12 text-gray-500 mt-12 px-8" style="font-weight: 100;">${
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
          <a id="${id}" ${
          i.open ? 'aria-controls="' + id + '-child-list"' : ''
        } tabindex="${
          i.open ? -1 : 0
        }" class="w-full inline-flex align-center hover:bg-gray-200 text-14 text-gray-700 font-bold py-6 px-8" style="border-radius: 4px; text-decoration: none;" role="link" aria-expanded="${
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
                    `<li><a href="${
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

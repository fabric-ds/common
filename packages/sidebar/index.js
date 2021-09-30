class FabricDocsSidebar extends HTMLElement {
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
      <style>
        :host {
          display: block;
        }
        
        .sidebar {
          top: 55px;
          padding: 20px 20px 40px 20px;
          z-index: 9;
        }  

        .backdrop {
          background: rgba(0, 0, 0);
          z-index: 11;
          opacity: .3;
        }

        @media (max-width: 990px) {
          .sidebar {
            top: 0;
            z-index: 12;
          }
        }
        </style>
      <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"
      />
      <div id="backdrop" class="backdrop fixed inset-0 hidden"></div>
      <section id="sidebar" style="width: 250px;" class="hidden overflow-scroll lg:block doc-left-menu bg-gray-50 h-screen fixed sidebar">
        <nav id="docs-sidebar" aria-orientation="vertical"></nav>
        <nav>
          <ul id="mobilerepos" class="hidden">
            <div class="h-1 my-12 w-11/12		mx-auto bg-gray-300"></div>
            <li class="my-4">
            ${sites
              .filter((s) => !document.location.href.includes(s.href))
              .map(
                (s) =>
                  `<a aria-label="Fabric ${s.name}" title="Fabric ${s.name}" rel="nofollow" tabindex="0" class="w-full inline-flex align-center hover:bg-gray-200 font-light text-14 text-gray-700 py-6 px-8 my-2" style="border-radius: 4px; text-decoration: none;" role="link" target="_self" href="${s.href}"
                }>${s.name}</a>`
              )
              .join('')}
              </li>
          </ul>
        </nav>
      </section>
  `;

    this.attachShadow({ mode: 'open' }).appendChild(
      fabricStylesTemplate.content
    );

    // Listen to mobile menu events
    const toggleMenu = () => {
      document.querySelector('body').classList.toggle('overflow-hidden');
      this.shadowRoot.querySelector('#sidebar').classList.toggle('hidden');
      this.shadowRoot.querySelector('#backdrop').classList.toggle('hidden');
      this.shadowRoot.querySelector('#mobilerepos').classList.toggle('hidden');
    };

    this.addEventListener('hamburger-click', toggleMenu);
    this.shadowRoot
      .querySelector('#backdrop')
      .addEventListener('click', toggleMenu);

    // Remove backdrop when resizing from mobile to desktop
    window.addEventListener('resize', () => {
      const backdrop = this.shadowRoot.querySelector('#backdrop');
      const repos = this.shadowRoot.querySelector('#mobilerepos');
      if (window.innerWidth >= 990 && !backdrop.classList.contains('hidden')) {
        backdrop.classList.toggle('hidden');
        repos.classList.toggle('hidden');
      }
    });

    // Set up menu
    this.menuIds = [];
    this.entries = JSON.parse(
      document.querySelector('[data-for="sidebar"]').textContent
    );
    this.innerHTML = '';

    // Ensure menu is open on refresh
    // TODO: Simplify & make more efficient
    function oneChildOpen(obj) {
      for (const key in obj) {
        const parent = obj[key];

        for (const key in parent) {
          const child = parent[key];

          for (const key in child) {
            const subchild = child[key];

            for (const key in subchild) {
              if (document.location.href.includes(subchild[key].href))
                return true;
            }
          }
        }
      }
    }

    this.entries.items = this.entries.items.map((i) => ({
      ...i,
      open:
        !!i.items?.filter((i) => document.location.href.includes(i.href))[0] ||
        oneChildOpen(i)
          ? i.open
            ? i.open
            : !i.open
          : i.open,
      items: i.hasOwnProperty('items')
        ? i.items.map((i) => ({
            ...i,
            open: !!i.items?.filter((i) =>
              document.location.href.includes(i.href)
            )[0]
              ? i.open
                ? i.open
                : !i.open
              : i.open,
          }))
        : undefined,
    }));

    this.render(true);
  }

  render(first) {
    this.shadowRoot.querySelector('#docs-sidebar').innerHTML = `
    <h3 class="text-12 text-gray-500 mt-10 px-8" style="font-weight: 100;">${
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
        }" target="_self" ${i.href ? `href="${i.href}"` : ''}>${i.title}</a>
          
        ${
          i.items
            ? `
          <div class="${i.open ? 'block' : 'hidden'}" aria-hidden="${!i.open}">
            <ul id="${id}-child-list">
              ${i.items
                .map(
                  (i) => `
                <li>
                  <a aria-label="${i.title}" ${
                    i.open ? 'aria-controls="' + id + '-sub-child-list"' : ''
                  } aria-current="${
                    document.location.href.includes(i.href) ? 'true' : 'false'
                  }" title="${i.title}" ${
                    i.href
                      ? `href="${i.href}"`
                      : i.onClick
                      ? `onclick="${i.onClick}"`
                      : ''
                  } class="w-full inline-flex align-center hover:bg-gray-200 font-light text-14 text-gray-700 py-6 pl-16 my-2 ${
                    document.location.href.includes(i.href) ? 'bg-gray-200' : ''
                  }" style="border-radius: 4px; text-decoration: none;" target="_self">${
                    i.title
                  }</a>

                  ${
                    i.items
                      ? `<div class="${
                          i.open ? 'block' : 'hidden'
                        }" aria-hidden="${!i.open}">
                      <ul id="${id}-sub-child-list" class="mb-0">
                        ${i.items
                          .map(
                            (i) =>
                              `<li>
                            <a aria-label="${i.title}" aria-current="${
                                document.location.href.includes(i.href)
                                  ? 'true'
                                  : 'false'
                              }" title="${i.title}" ${
                                i.href
                                  ? `href="${i.href}"`
                                  : i.onClick
                                  ? `onclick="${i.onClick}"`
                                  : ''
                              } class="w-full inline-flex align-center hover:bg-gray-200 font-light text-14 text-gray-700 py-6 pl-24 my-2 ${
                                document.location.href.includes(i.href)
                                  ? 'bg-gray-200'
                                  : ''
                              }" style="border-radius: 4px; text-decoration: none;" target="_self">${
                                i.title
                              }</a>
                          </li>`
                          )
                          .join('')}
                        </ul>
                      </div>
                    `
                      : ''
                  }

                </li>`
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

      // Adding clickHandler to top-level entry
      this.shadowRoot.getElementById(id).addEventListener('click', () => {
        const e = this.entries.items.filter((e) => e.id === id)[0];
        this.entries.items = this.entries.items.map((i) => ({
          ...i,
          open: e.id === i.id ? !i.open : i.open,
        }));

        this.render();
      });

      const children = this.shadowRoot.getElementById(`${id}-child-list`)
        ? this.shadowRoot.getElementById(`${id}-child-list`).children
        : [];

      [...children].forEach((child) => {
        if (child.children.length >= 2) {
          child.firstElementChild.addEventListener('click', () => {
            const parentId = child.parentNode.id.split('-')[0];
            const topLevelEntry = this.entries.items.filter(
              (e) => e.id === parentId
            )[0];
            const childTitle = child.children[0].ariaLabel;

            // Toggle the clicked children's open state
            topLevelEntry.items = topLevelEntry.items.map((i) => ({
              ...i,
              open: i.title === childTitle ? !i.open : i.open,
            }));

            // Assign this new state to the local state
            this.entries.items[this.entries.items.indexOf(topLevelEntry)] =
              topLevelEntry;

            this.render();
          });
        }
      });
    }
  }
}

if (!customElements.get('f-docs-sidebar')) {
  customElements.define('f-docs-sidebar', FabricDocsSidebar);
}

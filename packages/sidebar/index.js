class FabricDocsSidebar extends HTMLElement {
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
        <div class="flex lg:hidden items-center ml-6 mb-12">
          <a href="${sites[0].href}/"${
            ['', '/'].includes(document.location.pathname) && (document.location.hostname.startsWith('www.') || document.location.hostname.split('.').length <= 2)
                ? ' aria-current="page"'
                : ''
          } aria-label="Fabric Design front page" title="Fabric Design front page" class="flex items-center" style="text-decoration: none;">
            <svg aria-hidden="true" width="48" height="25" viewBox="0 0 48 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Fabric Docs</title>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M46.3812 22.6433V2.35678C46.3812 1.95667 46.0581 1.6311 45.661 1.6311H25.5332C25.1361 1.6311 24.813 1.95667 24.813 2.35678V23.3688H45.661C46.0581 23.3688 46.3812 23.0434 46.3812 22.6433Z" fill="#00BFFB"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70709 1.6311H2.33924C1.94212 1.6311 1.61914 1.95667 1.61914 2.35678V22.6433C1.61914 23.0434 1.94212 23.369 2.33924 23.369H23.1942V16.2275C23.1942 8.17898 16.6954 1.6311 8.70709 1.6311Z" fill="#006CFB"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.61891 22.6433V2.35681C1.61891 1.9567 1.94204 1.63113 2.33916 1.63113H8.70686C16.6951 1.63113 23.194 8.17901 23.194 16.2275V23.3689H2.33916C1.94204 23.3689 1.61891 23.0435 1.61891 22.6433ZM46.3811 22.6433C46.3811 23.0435 46.0579 23.3689 45.6608 23.3689H24.8129V2.35681C24.8129 1.9567 25.1361 1.63113 25.5332 1.63113H45.6608C46.0579 1.63113 46.3811 1.9567 46.3811 2.35681V22.6433ZM45.6608 0H25.5332C24.2434 0 23.194 1.05723 23.194 2.35681V9.14134C20.5782 3.73452 15.0676 0 8.70688 0H2.33918C1.04932 0 0 1.05723 0 2.35681V22.6433C0 23.9428 1.04932 25 2.33918 25H45.6608C46.9507 25 48 23.9428 48 22.6433V2.35681C48 1.05723 46.9507 0 45.6608 0Z" fill="white"/>
            </svg>
            <span aria-hidden="true" class="h3 text-gray-700 ml-12 mt-2">Fabric</span>
          </a>
        </div>
        <nav id="docs-sidebar" aria-label="Sidebar"></nav>
        <nav aria-label="Repositories">
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

    this.attachShadow({ mode: 'open' }).appendChild(fabricStylesTemplate.content);

    // Listen to mobile menu events
    const toggleMenu = () => {
      document.querySelector('body').classList.toggle('overflow-hidden');
      this.shadowRoot.querySelector('#sidebar').classList.toggle('hidden');
      this.shadowRoot.querySelector('#backdrop').classList.toggle('hidden');
      this.shadowRoot.querySelector('#mobilerepos').classList.toggle('hidden');
    };

    this.addEventListener('hamburger-click', toggleMenu);
    this.shadowRoot.querySelector('#backdrop').addEventListener('click', toggleMenu);

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
    this.entries = JSON.parse(document.querySelector('[data-for="sidebar"]').textContent);
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
              if (document.location.href.includes(subchild[key].href)) {
                return true;
              }
            }
          }
        }
      }
    }

    this.entries.items = this.entries.items.map((i) => ({
      ...i,
      open:
        !!i.items?.filter((i) => {
          {
            const match = document.location.href.includes(i.href);
            if (match) {
              document.title = `${i.title} — Fabric ${this.entries.category}`;
            }
            return match;
          }
        })[0] || oneChildOpen(i)
          ? i.open
            ? i.open
            : !i.open
          : i.open,
      items: i.hasOwnProperty('items')
        ? i.items.map((i) => ({
            ...i,
            open: !!i.items?.filter((i) => {
              const match = document.location.href.includes(i.href);
              if (match) {
                document.title = `${i.title} — Fabric ${this.entries.category}`;
              }
              return match;
            })[0]
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
          <a id="${id}" ${
          i.open ? 'aria-controls="' + id + '-child-list"' : ''
        } class="w-full inline-flex align-center hover:bg-gray-200 text-14 text-gray-700 font-bold py-6 px-8" style="border-radius: 4px; text-decoration: none;" aria-expanded="${i.open}" ${i.href
          ? `href="${i.href}" target="_self"`
          : 'tabindex="0" role="button"'
        }>${i.title}</a>
          
        ${
          i.items
            ? `
          <div class="${i.open ? 'block' : 'hidden'}" aria-hidden="${!i.open}">
            <ul id="${id}-child-list">
              ${i.items
                .map(
                  (i) => `
                <li>
                  <a id="${id}-${i.title}" aria-label="${i.title}" ${
                    i.open ? 'aria-controls="' + id + '-sub-child-list"' : ''
                  } aria-current="${document.location.href.includes(i.href) ? 'true' : 'false'}" title="${i.title}" ${
                    i.href ? `href="${i.href}"` : i.onClick ? `onclick="${i.onClick}"` : ''
                  } class="w-full inline-flex align-center hover:bg-gray-200 font-light text-14 text-gray-700 py-6 pl-16 my-2 ${
                    document.location.href.includes(i.href) ? 'bg-gray-200' : ''
                  }" style="border-radius: 4px; text-decoration: none;" target="_self" tabindex="0">${i.title}</a>

                  ${
                    i.items
                      ? `<div class="${i.open ? 'block' : 'hidden'}" aria-hidden="${!i.open}">
                      <ul id="${id}-sub-child-list" class="mb-0">
                        ${i.items
                          .map(
                            (i) =>
                              `<li>
                            <a aria-label="${i.title}" aria-current="${
                                document.location.href.includes(i.href) ? 'true' : 'false'
                              }" title="${i.title}" ${
                                i.href ? `href="${i.href}"` : i.onClick ? `onclick="${i.onClick}"` : ''
                              } class="w-full inline-flex align-center hover:bg-gray-200 font-light text-14 text-gray-700 py-6 pl-24 my-2 ${
                                document.location.href.includes(i.href) ? 'bg-gray-200' : ''
                              }" style="border-radius: 4px; text-decoration: none;" target="_self">${i.title}</a>
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
      const openMenu = () => {
        const e = this.entries.items.filter((e) => e.id === id)[0];
        this.entries.items = this.entries.items.map((i) => ({
          ...i,
          open: e.id === i.id ? !i.open : i.open,
        }));

        this.render();

        this.shadowRoot.getElementById(id).focus();
      };

      this.shadowRoot.getElementById(id).addEventListener('click', openMenu);
      this.shadowRoot.getElementById(id).addEventListener('keydown', (e) => {
        switch (e.key) {
          case ' ':
          case 'Enter':
            e.preventDefault();
            openMenu();
            break;
        }
      });

      const children = this.shadowRoot.getElementById(`${id}-child-list`)
        ? this.shadowRoot.getElementById(`${id}-child-list`).children
        : [];

      [...children].forEach((child) => {
        if (child.children.length >= 2) {
          const openMenu = () => {
            const parentId = child.parentNode.id.split('-')[0];
            const topLevelEntry = this.entries.items.filter((e) => e.id === parentId)[0];
            const childTitle = child.children[0].title;

            // Toggle the clicked children's open state
            topLevelEntry.items = topLevelEntry.items.map((i) => ({
              ...i,
              open: i.title === childTitle ? !i.open : i.open,
            }));

            // Assign this new state to the local state
            this.entries.items[this.entries.items.indexOf(topLevelEntry)] = topLevelEntry;

            this.render();

            this.shadowRoot.getElementById(`${id}-${childTitle}`).focus();
          };

          child.firstElementChild.addEventListener('click', openMenu);
          child.firstElementChild.addEventListener('keydown', (e) => {
            switch (e.key) {
              case ' ':
              case 'Enter':
                e.preventDefault();
                openMenu();
                break;
            }
          });
        }
      });
    }
  }
}

if (!customElements.get('f-docs-sidebar')) {
  customElements.define('f-docs-sidebar', FabricDocsSidebar);
}

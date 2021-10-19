class FabricDocsHighlightBox extends HTMLElement {
  constructor() {
    super();

    const fabricStylesTemplate = document.createElement('template');
    fabricStylesTemplate.innerHTML = `
      <style>:host { display: block; }</style>
      <link
          rel="stylesheet"
          type="text/css"
          href="https://assets.finn.no/pkg/@fabric-ds/css/v0/fabric.min.css"
      />
      <div class="bg-yellow-100 rounded-8 p-24 mb-24">
        <h3 class="h4">About Fabric Beta</h3>
        <p class="pb-0">Fabric is currently in Beta phase. We’re working hard to get things running smoothly and can’t do it without your help. Head to the <a href="https://sch-chat.slack.com/archives/C01GYKPJVFT">#finn-fabric</a> channel on Slack to share your feedback.</p>
        <div class="mt-12"><a href="https://sch-chat.slack.com/archives/C01GYKPJVFT" class="button button--secondary button--small">Post feedback on Slack</a></div>
      </div>
    `;

    this.attachShadow({ mode: 'open' }).appendChild(
      fabricStylesTemplate.content
    );
  }
}

if (!customElements.get('f-docs-highlight-box')) {
  customElements.define('f-docs-highlight-box', FabricDocsHighlightBox);
}

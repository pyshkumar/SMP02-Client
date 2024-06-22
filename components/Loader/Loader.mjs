const LoaderTemplate = document.createElement("div");
LoaderTemplate.id = "LoaderTemplate";
LoaderTemplate.innerHTML = `
<link rel="stylesheet" href="../../Styles/Loader.css" />  
<div class="page-container">
<svg class="spinner" viewBox="0 0 50 50">
  <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
</svg>
</div>`;

class loaderPage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(LoaderTemplate.cloneNode(true));

    const FAstyles = document.createElement("link");
    FAstyles.setAttribute("rel", "stylesheet");
    FAstyles.setAttribute("href", "./Styles/Loader.css");
    shadow.appendChild(FAstyles.cloneNode(true));

    this.authElement = this.shadowRoot.getElementById("LoaderTemplate");
  }

  connectedCallback() {
    console.log("Loader connected to the DOM!");
  }

  disconnectedCallback() {
    console.log("Loader disconnected to the DOM!");
  }
}

customElements.define("loader-page", loaderPage);

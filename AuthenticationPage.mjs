import utils from "./utility.mjs";

const authenticationPageTemplate = document.createElement("div");
authenticationPageTemplate.id = "authenticationPageTemplate";
authenticationPageTemplate.innerHTML = `
<link rel="stylesheet" href="./Styles/AuthenticationPage.css" />  
<div class="page-container">
<h1 class="portal-heading prevent-select">Job Information Portal</h1>
<div class="modal">
  <h2 class="modal-heading prevent-select">Login Page</h2>
  <div class="input-container">
    <label for="username">Username</label>
    <div class="input-with-icon">
    <i class="fa-solid fa-user"></i>
    <input type="text" id="username" name="username" />
  </div>
  </div>
  <div class="input-container">
    <label for="password">Password</label>
    <div class="input-with-icon">
    <i class="fa-solid fa-eye-slash" id="passwordIcon"></i>
    <input type="password" id="password" name="password" />
  </div>  
  </div>
  <button id="submit">Login</button>
</div>
</div>`;

class authenticationPage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(authenticationPageTemplate.cloneNode(true));

    const FAstyles = document.createElement("link");
    FAstyles.setAttribute("rel", "stylesheet");
    FAstyles.setAttribute("href", "font-6/css/all.css");
    shadow.appendChild(FAstyles.cloneNode(true));

    this.authElement = this.shadowRoot.getElementById(
      "authenticationPageTemplate"
    );

    this.authElement = this.shadowRoot.getElementById(
      "authenticationPageTemplate"
    );

    const togglePasswordIcon = this.authElement.querySelector("#passwordIcon");
    const loginButton = this.authElement.querySelector("#submit");

    loginButton.addEventListener("click", () => this.loginCredentials());

    togglePasswordIcon.addEventListener("click", () =>
      this.passwordVisibility()
    );
  }

  connectedCallback() {
    console.log("Authentication Page connected to the DOM!");
  }

  passwordVisibility() {
    const togglePassword = this.authElement.querySelector("#passwordIcon");
    const passwordInput = this.authElement.querySelector("#password");
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
  }

  loginCredentials() {
    try {
      const user = {
        username: this.authElement.querySelector("#username").value,
        password: this.authElement.querySelector("#password").value,
      };
      console.log(user);
    } catch (error) {
      console.log("Error", error);
    } finally {
      this.authElement.querySelector("#username").value = "";
      this.authElement.querySelector("#password").value = "";
    }
  }

  async authenticationCall() {}
}

customElements.define("authentication-page", authenticationPage);

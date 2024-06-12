import * as utils from "./utility.mjs";
import * as services from "./Services.mjs";

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
  <p id="usernameValidationErrorMessage" class="validationErrorMessage">Please input your Username</p>  
  </div>
  <div class="input-container">
    <label for="password">Password</label>
    <div class="input-with-icon">
    <i class="fa-solid fa-eye-slash" id="passwordIcon"></i>
    <input type="password" id="password" name="password" />
  </div>  
  <p id="passwordValidationErrorMessage" class="validationErrorMessage">Please input Password</p> 
  </div>
  <button id="submit"><i class="fa-solid fa-circle-notch" id="loginButtonIcon"></i>Login</button>
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
      const user = this.inputFieldsLoginCredentials();

      if (!this.validateCredentials()) return;
      console.log(user);
      this.authenticationCall(user);

      setTimeout(() => this.clearInputFields(), 1500);
      // this.clearInputFields();

      // this.dispatchEvent(
      //   new CustomEvent("authenticated", { bubbles: true, composed: true })
      // );
    } catch (error) {
      console.log("Error", error);
      services.errorNotifying("Error in fetching credentials");
      setTimeout(() => this.clearInputFields(), 1500);
    }
  }

  clearInputFields() {
    try {
      this.authElement.querySelector("#username").value = "";
      this.authElement.querySelector("#password").value = "";
    } catch (error) {
      console.log("Error", error);
    }
  }

  validateCredentials() {
    try {
      const user = this.inputFieldsLoginCredentials();
      const usernameVEM = this.authElement.querySelector(
        "#usernameValidationErrorMessage"
      );
      const passwordVEM = this.authElement.querySelector(
        "#passwordValidationErrorMessage"
      );

      if (user.username == "") {
        usernameVEM.style.display = "block";
      }

      if (user.password == "") {
        passwordVEM.style.display = "block";
      }

      if (user.username == "" || user.password == "") {
        this.checkValidationMessageValidity();
        return false;
      }

      this.checkValidationMessageValidity();

      return true;
    } catch (error) {
      console.log("Error", error);
      services.errorNotifying("Credentials validation check");
    } finally {
    }
  }

  checkValidationMessageValidity() {
    try {
      const user = this.inputFieldsLoginCredentials();

      const usernameVEM = this.authElement.querySelector(
        "#usernameValidationErrorMessage"
      );
      const passwordVEM = this.authElement.querySelector(
        "#passwordValidationErrorMessage"
      );

      if (user.username != "") {
        usernameVEM.style.display = "none";
      }

      if (user.password != "") {
        passwordVEM.style.display = "none";
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  async authenticationCall(user) {
    try {
      const response = await utils.postJson("signin", user);
      let data = await response.json();
      if (data.exists) {
        services.infoNotifying("successful authentication check");
        // this.dispatchEvent(
        //   new CustomEvent("authenticated", { bubbles: true, composed: true })
        // );
        window.location.href = "homepage.html";
      } else {
        services.errorNotifying(
          "Authentication failed. Please check your credentials"
        );
      }
    } catch (error) {
      console.log("Error", error);
      services.errorNotifying("Error in authenticating credentials");
    }
  }

  inputFieldsLoginCredentials() {
    try {
      const user = {
        username: this.authElement.querySelector("#username").value,
        password: this.authElement.querySelector("#password").value,
      };
      return user;
    } catch (error) {
      console.log("Error", error);
      services.errorNotifying("Credentials input fields");
    }
  }
}

customElements.define("authentication-page", authenticationPage);

import * as utils from "../../core/utility.mjs";
import * as services from "../../core/services.mjs";

const gridBaseTemplate = document.createElement("div");
gridBaseTemplate.id = "gridBaseTemplate";
gridBaseTemplate.innerHTML = `
<link rel="stylesheet" href="../../Styles/GridBase.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
    />
    
    <div class="navbar-container">
    <div class="navbar">
    
    

    <p id="nav-heading">Job Portal</p>
    <i class="fa-solid fa-power-off nav-menuIcon" id="logout-link"><span class="tooltiptext prevent-select">Log Out</span></i>

    </div>
    </div>
    
    <div id="mainHeadingContainer" class="permissibleScreen">
    <h1 id="mainHeading"></h1>
    <div id="mH-buttons-container">
      <button id="createBtn">Add Job Position

      </button>
    </div>
    <div id="statusfilter">
    <i class="fas fa-bars" id="statusFilter-menuIcon"></i>
    <div id="dropdown-menu" class="dropdown-menu">
    <div><p id = "statusFilterDropdownHeading">Status Filter</p></div>
    <a href="#" id="OpenJobsFilter">Open Jobs <i class="fa-solid fa-check statusFilterTickIcon" id="openJobFilterTick"></i></a>
    <a href="#" id="ClosedJobsFilter">Closed Jobs <i class="fa-solid fa-check statusFilterTickIcon" id="closedJobFilterTick"></i></a>
    <a href="#" id="Open&ClosedJobsFilter">Default <i class="fa-solid fa-check statusFilterTickIcon" id="defaultJobFilterTick"></i></a>

    </div>
</div>
  </div>
  <div id="nr-msg-container" class="permissibleScreen">
    <h1 id="nr-msg">No Job Opening</h1>
  </div>
  <div id="tableContainerTopArea"><div id="top-leftLabel"><h3 id="top-leftLabelText">2011</h3></div></div>
  <div id="mn-tb-con" class="permissibleScreen">
   
    <div id="table-container">
      <table id="employeeTable">
        <thead id="tableHead"></thead>
        <tbody id="tableBody"></tbody>
      </table>
    </div>
    <div id="pagination-box">
      <div class="page-size">
        <label for="pageSize">Page size:</label>
        <select id="pageSize">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div class="page-info">
        <span id="pagesStatus"></span>
      </div>
      <div class="page-info">
        <span id="recordsStatus"></span>
      </div>
      <div class="pagination-buttons">
        <button id="jumpToFirstPage">
          <i class="fa-solid fa-backward-fast"></i>
        </button>
        <button id="prevPage">
          <i class="fa-solid fa-caret-left"></i>
        </button>
        <button id="nextPage">
          <i class="fa-solid fa-caret-right"></i>
        </button>
        <button id="jumpToLastPage">
          <i class="fa-solid fa-forward-fast"></i>
        </button>
      </div>
    </div>
  </div>
<div id="myModal" class="modal">
<div class="modal-content">
  <h2 class="createModalHeading">Create Record</h2>

  <form id="modalForm">
    <div class="createModalFields">
      <table class="createModalTable" id="createModalTable">
      <tr>
      <td>
        <label for="CreateModalJobId" class="createModalitems"
          >Job ID <span class="man-star">*</span></label
        >
      </td>

      <td>
        <input
          class="createModalitems"
          type="number"
          id="CreateModalJobId"
          name="CreateModalJobId"
          required
        />
        <br />
        <small id="cM-eid-i-evm">Enter the Job ID</small>
      </td>
    </tr>
    <tr>
      <td>
        <label for="CreateModalJobTitle" class="createModalitems"
          >Job Title <span class="man-star">*</span></label
        >
      </td>
      <td>
        <input
          class="createModalitems"
          type="text"
          id="CreateModalJobTitle"
          name="CreateModalJobTitle"
          required
        /><br />
        <small id="cM-fn-i-evm">Enter the Job Title</small>
      </td>
    </tr>
    <tr>
      <td>
        <label for="CreateModalLocation" class="createModalitems"
          >Location
        </label>
      </td>
      <td>
        <input
          type="text"
          id="CreateModalLocation"
          name="CreateModalLocation"
          class="createModalitems"
        />
      </td>
    </tr>
    <tr>
      <td>
        <label for="CreateModalExperienceLevel" class="createModalitems"
          >Experience Level
        </label>
      </td>
      <td>
      <select
      id="CreateModalExperienceLevel"
      name="CreateModalExperienceLevel"
      class="createModalitems" >
      <option value="">Select Experience</option>
      <option value="Entry Level">Entry Level</option>
      <option value="Mid Level">Mid Level</option>
      <option value="Senior Level">Senior Level</option>
    </select><br />
        <small id="cM-em-i-evm">Enter a valid exp </small>
      </td>
    </tr>
    <tr>
      <td>
        <label for="CreateModalContactPerson" class="createModalitems"
          >Contact Person
        </label>
      </td>
      <td>
        <input
          type="text"
          id="CreateModalContactPerson"
          name="CreateModalContactPerson"
          class="createModalitems"
        /><br />
        <small id="cM-cn-i-evm">Enter a Contact Person</small>
      </td>
    </tr>
    <tr>
      <td>
        <label for="CreateModalStatus" class="createModalitems"
          >Status
        </label>
      </td>
      <td>
      <select
      id="CreateModalStatus"
      name="CreateModalStatus"
      class="createModalitems">
      <option value="">Select Status</option>
      <option value="Open">Open</option>
      <option value="Closed">Closed</option>
    </select>
      </td>
    </tr>
      </table>
    </div>

    <div class="createModalButtons">
      <button type="submit" id="submitModal">Submit</button>
      <button type="button" id="cancelModal">Cancel</button>
    </div>
  </form>
</div>
</div>

<div id="updateModal" class="modal">
<div class="modal-content">
  <h2 class="updateModalHeading">Update Record</h2>

  <form id="updateModalForm">
    <div class="createModalFields">
      <table class="updateModalTable">
        <tr>
          <td>
            <label for="UpdateModalJobId" class="createModalitems"
              >Job ID <span class="man-star">*</span></label
            >
          </td>
          <td>
            <input
              class="createModalitems"
              type="number"
              id="UpdateModalJobId"
              name="UpdateModalJobId"
              required
              disabled
            /><br />
            <small id="uM-eid-i-evm">Enter the Job ID</small>
          </td>
        </tr>
        <tr>
          <td>
            <label for="UpdateModalJobTitle" class="createModalitems"
              >Job Title <span class="man-star">*</span></label
            >
          </td>
          <td>
            <input
              class="createModalitems"
              type="text"
              id="UpdateModalJobTitle"
              name="UpdateModalJobTitle"
              required
            /><br />
            <small id="uM-fn-i-evm">Enter the Job Title</small>
          </td>
        </tr>
        <tr>
          <td>
            <label for="UpdateModalLocation" class="createModalitems"
              >Loacation
            </label>
          </td>
          <td>
            <input
              type="text"
              id="UpdateModalLocation"
              name="UpdateModalLocation"
              class="createModalitems"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label for="UpdateModalExperienceLevel" class="createModalitems"
              >Experience Level
            </label>
          </td>
          <td>
            <select
            id="UpdateModalExperienceLevel"
            name="UpdateModalExperienceLevel"
            class="createModalitems">
            <option value="">Select Experience Level</option>
            <option value="Entry Level">Entry Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
            <br />
            <small id="uM-em-i-evm">Enter a valid exp</small>
          </td>
        </tr>
        <tr>
          <td>
            <label for="UpdateModalContactPerson" class="createModalitems"
              >Contact Person
            </label>
          </td>
          <td>
            <input
              type="text"
              id="UpdateModalContactPerson"
              name="UpdateModalContactPerson"
              class="createModalitems"
            />
            <br />
            <small id="uM-cn-i-evm">Enter a Contact Person</small>
          </td>
        </tr>
        <tr>
          <td>
            <label for="UpdateModalStatus" class="createModalitems"
              >Status
            </label>
          </td>
          <td>
            <select
            id="UpdateModalStatus"
            name="UpdateModalStatus"
            class="createModalitems">
            <option value="">Select Status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
          </td>
        </tr>
      </table>
    </div>

    <div class="updateModalButtons">
      <button type="submit" id="submitUpdateModal">Save</button>
      <button type="button" id="cancelUpdateModal">Cancel</button>
    </div>
  </form>
</div>
</div>
<div id="deleteModal" class="modal">
<div class="modal-content">
  <h2 class="deleteModalHeading">Delete Record</h2>
  <p id="deleteModalMessage"></p>
  <div class="deleteModalButtons">
    <button type="button" id="confirmDeleteModal">Confirm</button>
    <button type="button" id="cancelDeleteModal">Cancel</button>
  </div>
</div>
</div>
<div id="descriptionModal" class="modal">
  <div class="modal-content">
    <span id="closeDescriptionModal" class="close">&times;</span>
    <div id="descriptionContent"></div>
  </div>
</div>
<div id="applyJobConfirmationModal" class="modal">
<div class="modal-content">
  <h2 class="applyJobConfirmationModalHeading">Apply For job</h2>
  <p id="applyJobConfirmationModalMessage"></p>
  <div class="applyJobConfirmationModalButtons">
    <button type="button" id="applyJobConfirmationModalConfirmBtn">Confirm</button>
    <button type="button" id="applyJobConfirmationModalCancelBtn">Cancel</button>
  </div>
</div>
</div>
<div id="revokeJobConfirmationModal" class="modal">
<div class="modal-content">
  <h2 class="revokeJobConfirmationModalHeading">Withdraw Job Application</h2>
  <p id="revokeJobConfirmationModalMessage"></p>
  <div class="revokeJobConfirmationModalButtons">
    <button type="button" id="revokeJobConfirmationModalConfirmBtn">Confirm</button>
    <button type="button" id="revokeJobConfirmationModalCancelBtn">Cancel</button>
  </div>
</div>
</div>
`;

class GridBase extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(gridBaseTemplate.cloneNode(true));

    const FAstyles = document.createElement("link");
    FAstyles.setAttribute("rel", "stylesheet");
    FAstyles.setAttribute("href", "../../font-6/css/all.css");
    shadow.appendChild(FAstyles.cloneNode(true));

    this.gridElement = this.shadowRoot.getElementById("gridBaseTemplate");
    this.noRecordsMessageContainer = this.shadowRoot.getElementById("nr-msg");
    this.mainGridContainer = this.shadowRoot.getElementById("mn-tb-con");
    this.paginationBox = this.shadowRoot.getElementById("pagination-box");
    this.tableContainerTopArea = this.shadowRoot.getElementById(
      "tableContainerTopArea"
    );
    this.statusFilterMenuContainer =
      this.shadowRoot.getElementById("statusfilter");
    const logoutLink = this.shadowRoot.getElementById("logout-link");

    this.mainGridContainer.style.display = "none";
    this.noRecordsMessageContainer.style.display = "none";
    this.tableContainerTopArea.style.display = "none";
    // this.statusFilterMenuContainer.style.visibility = "hidden";

    // Retrieved attributes
    const mainHeading = this.getAttribute("main-heading") || "Job Info Portal";
    let columnHeadings = JSON.parse(this.getAttribute("columns")) || [];
    const sortFeature = this.getAttribute("sortFeature") || "false";
    const paginationFeature = this.getAttribute("paginationFeature") || "false";
    const userType = sessionStorage.getItem("userType") || "regular";
    const user = sessionStorage.getItem("userId");

    this.employeeTableColumns = [];
    this.employeeTableColumnsLabels = [];
    this.data = [];
    this.oldData = [];
    this.currentPage = 1;
    this.recordsPerPage = 10;
    this.sortField = "";
    this.sortAscending = true;
    this.sortingON = sortFeature.toLowerCase();
    this.paginationON = paginationFeature.toLowerCase();
    this.userClass = userType.toLowerCase();
    this.userId = user;
    this.recordsStatus = this.userClass === "regular" ? "open" : "";

    if (this.userClass === "regular") {
      columnHeadings = columnHeadings.filter(
        (heading) => heading !== "Contact Person"
      );
    }

    this.fetchDataAndPopulateTable();
    this.dataFetch();
    this.setMainHeading(mainHeading);
    this.setUserView();
    this.setPaginationBox();
    this.setColumnsHeading(columnHeadings);

    // this.testing();

    //navbar
    logoutLink.addEventListener("click", () => this.logout());

    // Bind event listeners pagation
    this.shadowRoot
      .getElementById("jumpToFirstPage")
      .addEventListener("click", () => this.goToFirstPage());
    this.shadowRoot
      .getElementById("prevPage")
      .addEventListener("click", () => this.goToPreviousPage());
    this.shadowRoot
      .getElementById("nextPage")
      .addEventListener("click", () => this.goToNextPage());
    this.shadowRoot
      .getElementById("jumpToLastPage")
      .addEventListener("click", () => this.goToLastPage());
    this.shadowRoot
      .getElementById("pageSize")
      .addEventListener("change", (event) => this.changePageSize(event));

    //Create Modal
    this.Createmodal = this.shadowRoot.getElementById("myModal");
    this.createBtn = this.shadowRoot.getElementById("createBtn");
    this.submitModal = this.shadowRoot.getElementById("submitModal");
    this.cancelModal = this.shadowRoot.getElementById("cancelModal");

    this.createBtn.addEventListener("click", () => this.openCreateModal());
    this.submitModal.addEventListener("click", (event) =>
      this.submitCreateModal(event)
    );
    this.cancelModal.addEventListener("click", () => this.closeCreateModel());

    //Update Modal
    this.updateModal = this.shadowRoot.getElementById("updateModal");
    this.submitUpdateModal =
      this.shadowRoot.getElementById("submitUpdateModal");
    this.cancelUpdateModal =
      this.shadowRoot.getElementById("cancelUpdateModal");

    this.cancelUpdateModal.addEventListener("click", () =>
      this.closeUpdateModel()
    );
    this.submitUpdateModal.addEventListener("click", (event) =>
      this.submitUpdateModalFunc(event)
    );

    //deleteModal
    this.deleteModal = this.shadowRoot.getElementById("deleteModal");
    this.confirmDeleteBtn =
      this.shadowRoot.getElementById("confirmDeleteModal");
    this.cancelDeleteBtn = this.shadowRoot.getElementById("cancelDeleteModal");

    this.cancelDeleteBtn.addEventListener("click", () =>
      this.closeDeleteModel()
    );
    this.confirmDeleteBtn.addEventListener("click", async (event) =>
      this.submitDeleteModalFunc(event)
    );

    //Apply For Job Confirmation Modal

    this.applyForJobConfirmationModal = this.shadowRoot.getElementById(
      "applyJobConfirmationModal"
    );

    this.applyForJobModalConfirmBtn = this.shadowRoot.getElementById(
      "applyJobConfirmationModalConfirmBtn"
    );
    this.applyForJobModalCancelBtn = this.shadowRoot.getElementById(
      "applyJobConfirmationModalCancelBtn"
    );

    this.applyForJobModalCancelBtn.addEventListener("click", () =>
      this.closeApplyForJobConfirmationModal()
    );

    this.applyForJobModalConfirmBtn.addEventListener("click", () =>
      this.applyForJob()
    );

    //Revoke For Job Confirmation Modal

    this.revokeForJobConfirmationModal = this.shadowRoot.getElementById(
      "revokeJobConfirmationModal"
    );

    this.revokeForJobModalConfirmBtn = this.shadowRoot.getElementById(
      "revokeJobConfirmationModalConfirmBtn"
    );
    this.revokeForJobModalCancelBtn = this.shadowRoot.getElementById(
      "revokeJobConfirmationModalCancelBtn"
    );

    this.revokeForJobModalCancelBtn.addEventListener("click", () =>
      this.closeRevokeForJobConfirmationModal()
    );

    this.revokeForJobModalConfirmBtn.addEventListener("click", () =>
      this.revokeForJob()
    );

    //DescriptionModal

    this.descriptionModalCloseBtn = this.shadowRoot.getElementById(
      "closeDescriptionModal"
    );

    this.descriptionModalCloseBtn.addEventListener("click", () =>
      this.closeDescriptionModal()
    );

    //stataus-Filter requirement

    const menuIcon = this.shadowRoot.querySelector("#statusFilter-menuIcon");
    const dropdownMenu = this.shadowRoot.getElementById("dropdown-menu");
    const statusFilterOpenJobOption =
      this.shadowRoot.getElementById("OpenJobsFilter");
    const statusFilterClosedJobOption =
      this.shadowRoot.getElementById("ClosedJobsFilter");
    const statusFilterOpenAndClosedJobOption = this.shadowRoot.getElementById(
      "Open&ClosedJobsFilter"
    );

    menuIcon.addEventListener("click", function () {
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    });

    this.shadowRoot.addEventListener("click", function (e) {
      if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
      }
    });

    statusFilterOpenJobOption.addEventListener("click", () =>
      this.setStatusFilterMenuIcon("open")
    );

    statusFilterClosedJobOption.addEventListener("click", () =>
      this.setStatusFilterMenuIcon("closed")
    );

    statusFilterOpenAndClosedJobOption.addEventListener("click", () =>
      this.setStatusFilterMenuIcon("both")
    );
  }

  connectedCallback() {
    console.log("GridBase connected to the DOM!");
  }

  async testing() {
    const sortInfo = {
      name: "LASTNAME",
      order: "DESC",
      userType: this.userClass,
      userId: this.userId,
      status: this.recordsStatus,
    };
    const response = await utils.postJson("job/search", sortInfo);
    const data = await response.json();
    console.log(data);
  }

  logout() {
    sessionStorage.clear();
    this.dispatchEvent(
      new CustomEvent("logout", {
        bubbles: true,
        composed: true,
      })
    );
    window.location.href = "../../index.html";
    // setTimeout(() => {}, 800);
  }

  setUserView() {
    const addButtonContainer = this.shadowRoot.getElementById(
      "mainHeadingContainer"
    );
    if (this.userClass !== "admin")
      addButtonContainer.style.visibility = "hidden";
  }

  async setStatusFilterMenuIcon(status) {
    const menuIcon = this.shadowRoot.querySelector("#statusFilter-menuIcon");
    const dropdownMenu = this.shadowRoot.getElementById("dropdown-menu");
    const openOptionTickIcon =
      this.shadowRoot.getElementById("openJobFilterTick");
    const closedOptionTickIcon = this.shadowRoot.getElementById(
      "closedJobFilterTick"
    );
    const defaultOptionTickIcon = this.shadowRoot.getElementById(
      "defaultJobFilterTick"
    );

    openOptionTickIcon.style.visibility = "hidden";
    closedOptionTickIcon.style.visibility = "hidden";
    defaultOptionTickIcon.style.visibility = "hidden";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.remove("fa-grip-lines-vertical");
    if (status.toLowerCase() === "open") {
      menuIcon.classList.add("fa-grip-lines-vertical");
      openOptionTickIcon.style.visibility = "visible";
      this.recordsStatus = "open";
    } else if (status.toLowerCase() === "closed") {
      menuIcon.classList.add("fa-grip-lines-vertical");
      closedOptionTickIcon.style.visibility = "visible";
      this.recordsStatus = "closed";
    } else {
      menuIcon.classList.add("fa-bars");
      defaultOptionTickIcon.style.visibility = "visible";
      this.recordsStatus = "";
    }

    dropdownMenu.style.display = "none";
    await this.dataFetch();
    // this.fetchDataAndPopulateTable();
    this.populateTable();
  }

  setPaginationBox() {
    if (this.paginationON === "true") {
      this.paginationBox.style.display = "flex";
    } else {
      this.paginationBox.style.display = "none";
    }
  }

  setMainHeading(mainHeading) {
    const mH = this.shadowRoot.getElementById("mainHeading");
    mH.innerHTML = mainHeading.slice(0, 50);
  }

  setColumnsHeading(columnHeadings) {
    if (columnHeadings.length === 0) {
      services.errorNotifying("Grid columns headings not defined");
      throw new Error("Grid columns headings not defined");
    }
    let newColumn = [];

    columnHeadings.forEach((element) => {
      newColumn.push(element.split(" ").join("").toUpperCase());
    });

    this.employeeTableColumns = [...newColumn];
    this.employeeTableColumnsLabels = [...columnHeadings];
  }

  setRecordsCountLabel(numRecords) {
    const labelText = this.shadowRoot.getElementById("top-leftLabelText");
    if (numRecords === "") {
      labelText.innerText = `Job Positions : 0`;
    } else {
      labelText.innerText = `Job Positions : ${numRecords}`;
    }
  }

  async dataFetch() {
    try {
      const orderBy = this.sortAscending === true ? "ASC" : "DESC";
      const sortInfo = {
        name: this.sortField,
        order: orderBy,
        userType: this.userClass,
        userId: this.userId,
        status: this.recordsStatus,
      };
      const response = await utils.postJson("job/search", sortInfo);
      let data = await response.json();

      const numRecords = data.length;
      if (numRecords === 0) {
        this.mainGridContainer.style.display = "none";
        this.noRecordsMessageContainer.style.display = "block";
        this.tableContainerTopArea.style.display = "none";
        // this.statusFilterMenuContainer.style.visibility = "hidden";
      } else {
        this.noRecordsMessageContainer.style.display = "none";
        this.mainGridContainer.style.display = "block";
        this.tableContainerTopArea.style.display = "block";
        // if (this.userClass === "admin")
        //   this.statusFilterMenuContainer.style.visibility = "visible";

        if (numRecords < 11) this.paginationON = "false";
        else this.paginationON = "true";
      }
      this.setPaginationBox();
      this.setRecordsCountLabel(numRecords);
      this.oldData = [...data];
      this.data = [...data];
    } catch (error) {
      services.errorNotifying("404 Server Not Found");
      throw error;
    }
  }

  async fetchDataAndPopulateTable() {
    try {
      const orderBy = this.sortAscending === true ? "ASC" : "DESC";
      const sortInfo = {
        name: this.sortField,
        order: orderBy,
        userType: this.userClass,
        userId: this.userId,
        status: this.recordsStatus,
      };
      const response = await utils.postJson("job/search", sortInfo);
      const data = await response.json();
      this.data = data;
      this.oldData = [...data];
      this.populateTableHeader();
      this.populateTable();
      //this.updatePageInfo();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  populateTableHeader() {
    const tableHead = this.shadowRoot.getElementById("tableHead");
    tableHead.innerHTML = "";
    const row = tableHead.insertRow();

    this.employeeTableColumnsLabels.forEach((element) => {
      var th = document.createElement("TH");
      var Div = document.createElement("div");

      Div.classList.add("icond", "prevent-select");
      Div.id = `_${element.split(" ").join("").toUpperCase()}`;
      Div.innerText = ` ${element.charAt(0).toUpperCase()}${element.slice(1)} `;

      if (this.sortingON == "true") {
        const Icon = document.createElement("i");
        Icon.classList.add("fa-solid", "fa-sort", "sortCarrot");
        Div.appendChild(Icon);
      }
      th.appendChild(Div);
      row.appendChild(th);
    });

    if (this.userClass === "admin") {
      var th = document.createElement("TH");
      th.id = "action_column";
      // th.classList.add("plusIcon", "prevent-select", "fa-solid", "fa-plus");
      row.appendChild(th);
      tableHead.appendChild(row);
    }

    if (this.sortingON == "true") {
      this.employeeTableColumns.forEach((element) => {
        this.shadowRoot
          .getElementById(`_${element}`)
          .addEventListener("click", () => this.setSortingField(`${element}`));
      });
    }
  }

  populateTable() {
    const tableBody = this.shadowRoot.getElementById("tableBody");
    // if (this.sortField.length !== 0) {
    //   this.data.sort((a, b) =>
    //     this.sortAscending
    //       ? a[this.sortField].localeCompare(b[this.sortField])
    //       : b[this.sortField].localeCompare(a[this.sortField])
    //   );
    // }
    var startIndex = 0;
    var endIndex = this.data.length;

    if (this.paginationON === "true") {
      startIndex = (this.currentPage - 1) * this.recordsPerPage;
      endIndex = startIndex + this.recordsPerPage;
    }

    const paginatedData = this.data.slice(startIndex, endIndex);

    tableBody.innerHTML = "";
    paginatedData.forEach((employee) => {
      const row = document.createElement("tr");

      this.employeeTableColumns.forEach((column) => {
        const cell = document.createElement("td");
        cell.textContent = employee[column];
        if (column === "JOBID") {
          this.userClass === "admin"
            ? cell.addEventListener("click", () =>
                this.openUpdateModal(employee)
              )
            : cell.addEventListener("click", () =>
                this.openDescriptionModal(employee)
              );
          cell.classList.add("descCell");
        }

        if (this.userClass === "regular" && column === "STATUS") {
          cell.textContent = "";
          const div = document.createElement("div");
          div.textContent = employee[column];

          if (employee[column] === "APPLY") {
            div.classList.add("applyJobIcon");
            div.addEventListener("click", () =>
              this.openApplyForJobConfirmationModal(employee["JOBID"])
            );
          } else {
            div.classList.add("revokeJobIcon");
            div.addEventListener("click", () =>
              this.openRevokeForJobConfirmationModal(employee["JOBID"])
            );
          }
          cell.appendChild(div);
        }

        row.appendChild(cell);
      });

      const actionCell = document.createElement("td");

      // const editIcon = document.createElement("i");
      // editIcon.classList.add("fa-solid", "fa-pen", "editIcon");
      // editIcon.addEventListener("click", () => this.openUpdateModal(employee));
      // actionCell.appendChild(editIcon);

      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-solid", "fa-trash-can", "deleteIcon");
      deleteIcon.addEventListener("click", () =>
        this.openDeleteModal(employee.JOBID)
      );
      actionCell.appendChild(deleteIcon);

      if (this.userClass === "admin") {
        row.appendChild(actionCell);
      }

      tableBody.appendChild(row);
    });

    if (this.sortingON == "true") {
      this.updateIcons();
    }
    this.updatePageInfo();
  }

  async sortRecords() {
    try {
      // const response = await utils.postJson("sortRecords", {
      //   columnName: sortCol,
      //   sortOrder: sortOrder,
      // });
      // const newData = await response.json();

      const orderBy = this.sortAscending === true ? "ASC" : "DESC";
      const sortInfo = {
        name: this.sortField,
        order: orderBy,
        userType: this.userClass,
        userId: this.userId,
        status: this.recordsStatus,
      };
      const response = await utils.postJson("job/search", sortInfo);
      const data = await response.json();
      this.data = [...data];
      this.populateTable();
    } catch (error) {
      console.log(error);
    }
  }

  setSortingField(field) {
    if (this.sortField != field) {
      this.sortField = field;
      this.sortAscending = true;
      this.sortRecords();
    } else if (this.sortField === field && this.sortAscending === true) {
      this.sortAscending = false;
      this.sortRecords();
    } else if (this.sortField === field && this.sortAscending === false) {
      this.sortField = "";
      // this.data = [...this.oldData];
      this.sortRecords();
      this.populateTable();
    }
    // this.fetchDataAndPopulateTable();
  }

  updateIcons() {
    const allDiv = this.shadowRoot.querySelectorAll(".icond");

    allDiv.forEach((icon) => {
      icon.querySelector("i").classList.remove("fa-arrow-up", "fa-arrow-down");
      icon.querySelector("i").classList.add("fa-sort");
    });
    if (this.sortField.length !== 0) {
      const div = this.shadowRoot.getElementById(`_${this.sortField}`);
      if (!this.sortAscending) {
        div.querySelector("i").classList.remove("fa-arrow-up", "fa-sort");
        div.querySelector("i").classList.add("fa-arrow-down");
      }
      if (this.sortAscending) {
        div.querySelector("i").classList.remove("fa-arrow-down", "fa-sort");
        div.querySelector("i").classList.add("fa-arrow-up");
      }
    }
  }

  validateData(formData, modalType) {
    const {
      jobId,
      jobTitle,
      location,
      experienceLevel,
      contactPerson,
      status,
    } = formData;

    // let regex = new RegExp(
    //   "^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})?$"
    // );
    // let result = regex.test(email);

    const eid = this.shadowRoot.getElementById(`${modalType}-eid-i-evm`);
    const em = this.shadowRoot.getElementById(`${modalType}-em-i-evm`);
    const fn = this.shadowRoot.getElementById(`${modalType}-fn-i-evm`);
    const cn = this.shadowRoot.getElementById(`${modalType}-cn-i-evm`);

    if (!jobId) {
      eid.innerText = "Enter the Job ID";
      eid.style.display = "block";
      return false;
    }
    eid.style.display = "none";

    if (!jobTitle) {
      fn.style.display = "block";
      return false;
    }
    fn.style.display = "none";

    // if (!result) {
    //   em.style.display = "block";
    //   return false;
    // }
    // em.style.display = "none";

    return true;
  }

  //Pagination Box

  changePageSize(event) {
    this.recordsPerPage = parseInt(event.target.value);
    this.currentPage = 1;
    // this.fetchDataAndPopulateTable();
    this.populateTable();
  }

  goToFirstPage() {
    if (this.currentPage === 1) return;
    this.goToPage(1);
  }

  goToNextPage() {
    const totalPages = Math.ceil(this.data.length / this.recordsPerPage);
    if (this.currentPage < totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  goToLastPage() {
    const totalPages = Math.ceil(this.data.length / this.recordsPerPage);
    if (this.currentPage === totalPages) return;
    this.goToPage(totalPages);
    this.setPaginationBox();
  }

  goToPage(page) {
    this.currentPage = page;
    this.fetchDataAndPopulateTable();
  }
  async updatePageInfo() {
    if (this.paginationON !== "true") return;
    try {
      const totalPages = Math.ceil(this.data.length / this.recordsPerPage);

      const orderBy = this.sortAscending === true ? "ASC" : "DESC";
      const sortInfo = {
        name: this.sortField,
        order: orderBy,
        userType: this.userClass,
        userId: this.userId,
        status: this.recordsStatus,
      };
      const response = await utils.postJson("job/search", sortInfo);
      const data = await response.json();
      // const response = await utils.getJson("checkDB");
      // const numRecordsData = await response.json();
      // console.log("data1length", data1.length);
      // console.log("numRecords", numRecordsData.numRecords);
      const numRecords = data.length;
      const offset =
        this.currentPage * this.recordsPerPage - this.recordsPerPage + 1;
      const limitk =
        numRecords >= this.currentPage * this.recordsPerPage
          ? this.currentPage * this.recordsPerPage
          : numRecords;
      if (this.currentPage > totalPages) this.goToPreviousPage();

      this.shadowRoot.getElementById(
        "pagesStatus"
      ).textContent = `Page ${this.currentPage} of ${totalPages}`;
      this.shadowRoot.getElementById(
        "recordsStatus"
      ).textContent = `${offset} to ${limitk} of ${numRecords} Records`;
    } catch (error) {
      console.log("Error:Page info updation error");
      throw error;
    }
  }

  //Create Modal Functions

  clearCreateModalInput() {
    const createForm = this.shadowRoot.getElementById("modalForm");

    const createFormInput = createForm.querySelectorAll("input");
    createFormInput.forEach((input) => {
      input.value = "";
    });

    const createFormSelect = createForm.querySelectorAll("select");
    createFormSelect.forEach((select) => {
      select.selectedIndex = 0;
    });
    this.Createmodal.style.display = "none";
  }

  openCreateModal() {
    // const table = this.shadowRoot.getElementById("createModalTable");
    // table.innerHTML = "";
    // this.employeeTableColumns.forEach((column) => {
    //   const row = document.createElement("tr");

    //   const labelCell = document.createElement("td");
    //   const label = document.createElement("label");
    //   label.textContent = `${column.charAt(0).toUpperCase()}${column.slice(
    //     1
    //   )} `;
    //   label.classList.add("createModalitems");
    //   label.htmlFor = `CreateModal${column}`;
    //   labelCell.appendChild(label);
    //   row.appendChild(labelCell);

    //   const inputCell = document.createElement("td");
    //   const input = document.createElement("input");
    //   input.type = "text";
    //   input.id = `CreateModal${column}`;
    //   input.name = `CreateModal${column}`;
    //   input.required = true;
    //   input.classList.add("createModalitems");
    //   inputCell.appendChild(input);
    //   row.appendChild(inputCell);

    //   table.appendChild(row);
    // });
    this.Createmodal.style.display = "block";
  }

  async submitCreateModal(event) {
    event.preventDefault();

    try {
      // const formData = {};

      // this.employeeTableColumns.forEach((column) => {
      //   const value = this.shadowRoot.getElementById(
      //     `CreateModal${column}`
      //   ).value;
      //   formData[column] = value;
      // });
      // console.log("hello");
      // console.log(formData);
      const formData = {
        jobId: this.shadowRoot.getElementById("CreateModalJobId").value,
        jobTitle: this.shadowRoot.getElementById("CreateModalJobTitle").value,
        location: this.shadowRoot.getElementById("CreateModalLocation").value,
        experienceLevel: this.shadowRoot.getElementById(
          "CreateModalExperienceLevel"
        ).value,
        contactPerson: this.shadowRoot.getElementById(
          "CreateModalContactPerson"
        ).value,
        status: this.shadowRoot.getElementById("CreateModalStatus").value,
      };

      if (!this.validateData(formData, "cM")) {
        return;
      }
      const response2 = await services.validateID(formData);
      const data = await response2.json();

      const eid = this.shadowRoot.getElementById(`cM-eid-i-evm`);
      if (data.exists) {
        eid.innerText = "The Job ID already exists";
        eid.style.display = "block";
        console.log(eid.innerText);
        return;
      }
      eid.innerText = "Enter the Job ID";
      eid.style.display = "none";
      const response = await utils.postJson("job", formData);
      if (response.ok) {
        console.log("Job Record added successfully");
        services.infoNotifying("Job Record added successfully");
        await this.dataFetch();
        // this.fetchDataAndPopulateTable();
        this.populateTable();
        this.clearCreateModalInput();
      } else {
        console.error("Failed to add job record");
        services.errorNotifying("Failed to add job record");
        this.Createmodal.style.display = "none";
      }
    } catch (error) {
      console.error("Failed to add job record");
      services.errorNotifying("Failed to add job record");
      this.clearCreateModalInput();
    }
  }
  closeCreateModel() {
    const eid = this.shadowRoot.getElementById("cM-eid-i-evm");
    const em = this.shadowRoot.getElementById("cM-em-i-evm");
    const fn = this.shadowRoot.getElementById("cM-fn-i-evm");
    const cn = this.shadowRoot.getElementById("cM-cn-i-evm");

    em.style.display = "none";
    eid.style.display = "none";
    fn.style.display = "none";
    cn.style.display = "none";

    this.clearCreateModalInput();
  }

  //Update Modal

  disableUpdateModal(value) {
    if (value.toLowerCase() === "true") {
      this.shadowRoot.getElementById("UpdateModalJobTitle").disabled = value;
      this.shadowRoot.getElementById("UpdateModalLocation").disabled = value;
      this.shadowRoot.getElementById("UpdateModalExperienceLevel").disabled =
        value;
      this.shadowRoot.getElementById("UpdateModalContactPerson").disabled =
        value;
      this.shadowRoot.getElementById("UpdateModalStatus").disabled = value;
      this.shadowRoot.getElementById("submitUpdateModal").style.display =
        "none";
    } else {
      this.shadowRoot
        .getElementById("UpdateModalJobTitle")
        .removeAttribute("disabled");
      this.shadowRoot
        .getElementById("UpdateModalLocation")
        .removeAttribute("disabled");

      this.shadowRoot
        .getElementById("UpdateModalExperienceLevel")
        .removeAttribute("disabled");
      this.shadowRoot
        .getElementById("UpdateModalContactPerson")
        .removeAttribute("disabled");
      this.shadowRoot
        .getElementById("UpdateModalStatus")
        .removeAttribute("disabled");
      this.shadowRoot.getElementById("submitUpdateModal").style.display =
        "inline-block";
    }
  }

  openUpdateModal(employee) {
    this.shadowRoot.getElementById("UpdateModalJobId").value = employee.JOBID;
    this.shadowRoot.getElementById("UpdateModalJobTitle").value =
      employee.JOBTITLE;
    this.shadowRoot.getElementById("UpdateModalLocation").value =
      employee.LOCATION;
    this.shadowRoot.getElementById("UpdateModalExperienceLevel").value =
      employee.EXPERIENCELEVEL;
    this.shadowRoot.getElementById("UpdateModalContactPerson").value =
      employee.CONTACTPERSON;
    this.shadowRoot.getElementById("UpdateModalStatus").value = employee.STATUS;

    if (employee.STATUS.toLowerCase() === "closed")
      this.disableUpdateModal("true");
    else this.disableUpdateModal("false");

    this.updateModal.style.display = "block";
  }

  async submitUpdateModalFunc(event) {
    event.preventDefault();
    try {
      const formData = {
        jobId: this.shadowRoot.getElementById("UpdateModalJobId").value,
        jobTitle: this.shadowRoot.getElementById("UpdateModalJobTitle").value,
        location: this.shadowRoot.getElementById("UpdateModalLocation").value,
        experienceLevel: this.shadowRoot.getElementById(
          "UpdateModalExperienceLevel"
        ).value,
        contactPerson: this.shadowRoot.getElementById(
          "UpdateModalContactPerson"
        ).value,
        status: this.shadowRoot.getElementById("UpdateModalStatus").value,
      };

      if (!this.validateData(formData, "uM")) {
        return;
      }

      const response = await utils.updateJson("job", formData);

      if (response.ok) {
        console.log("Job record updated successfully");
        services.infoNotifying("Job record updated successfully");
        this.updateModal.style.display = "none";
        await this.dataFetch();
        // this.fetchDataAndPopulateTable();
        this.populateTable();
      } else {
        console.error("Error updating data:", error);
        services.errorNotifying("Failed to update job record");
        this.updateModal.style.display = "none";
      }
    } catch (error) {
      console.error("Failed to update job record", error);
      services.errorNotifying("Failed to update job record");
      this.updateModal.style.display = "none";
    }
  }

  closeUpdateModel() {
    const eid = this.shadowRoot.getElementById("uM-eid-i-evm");
    const em = this.shadowRoot.getElementById("uM-em-i-evm");
    const fn = this.shadowRoot.getElementById("uM-fn-i-evm");
    const cn = this.shadowRoot.getElementById("uM-cn-i-evm");

    em.style.display = "none";
    eid.style.display = "none";
    fn.style.display = "none";
    cn.style.display = "none";

    this.updateModal.style.display = "none";
  }

  //Delete Modal

  openDeleteModal(jobId) {
    this.shadowRoot.getElementById(
      "deleteModalMessage"
    ).textContent = `Are you sure you want to proceed with the deletion of the Job record associated with Job ID ${jobId}`;
    this.deleteModal.style.display = "block";
  }

  async submitDeleteModalFunc(event) {
    event.preventDefault();
    try {
      const jobId = this.shadowRoot
        .getElementById("deleteModalMessage")
        .textContent.split(" ")
        .pop();

      const response = await utils.deleteJson("job", {
        jobId: jobId,
      });

      if (response.ok) {
        console.log("Job record deleted successfully");
        services.infoNotifying("Job record deleted successfully");
        this.deleteModal.style.display = "none";
        await this.dataFetch();
        // this.fetchDataAndPopulateTable();
        this.populateTable();
      } else {
        console.error("Failed to delete job record");
        services.errorNotifying("Failed to delete job record");
        this.deleteModal.style.display = "none";
      }
    } catch (error) {
      console.error("Failed to delete job record");
      services.errorNotifying("Failed to delete job record");
      this.deleteModal.style.display = "none";
    }
  }

  closeDeleteModel() {
    this.deleteModal.style.display = "none";
  }

  //Description Modal

  openDescriptionModal(employee) {
    const descriptionModal = this.shadowRoot.getElementById("descriptionModal");
    const descriptionContent =
      this.shadowRoot.getElementById("descriptionContent");

    // Fetch description data based on employeeId (example implementation)
    // const record = this.data.find(
    //   (employee) => employee.EMPLOYEEID === employeeId
    // );
    // console.log("openDesc", employee);
    const record = employee;

    const statusValue = record.STATUS === "APPLY" ? "Not Applied" : "Applied";

    // Populate modal content
    if (record) {
      descriptionContent.innerHTML = `
        <h2>Job Description</h2>
        <p>Job ID: ${record.JOBID}</p>
        <p>Job Title: ${record.JOBTITLE}</p>
        <p>Location : ${record.LOCATION} 
        <p>Experience Level: ${record.EXPERIENCELEVEL}</p>
        <p>Status: ${statusValue}</p>
      `;

      descriptionModal.style.display = "block";
    }
  }

  closeDescriptionModal() {
    const descriptionContent =
      this.shadowRoot.getElementById("descriptionContent");
    const descriptionModal = this.shadowRoot.getElementById("descriptionModal");
    descriptionModal.style.display = "none";
    descriptionContent.innerHTML = "";
  }

  //Appply Job Confirmation Modal

  openApplyForJobConfirmationModal(jobId) {
    this.shadowRoot.getElementById(
      "applyJobConfirmationModalMessage"
    ).textContent = `Are you sure you want to proceed with applying for the job associated with Job ID ${jobId}`;
    this.applyForJobConfirmationModal.style.display = "block";
  }

  closeApplyForJobConfirmationModal() {
    this.applyForJobConfirmationModal.style.display = "none";
  }

  async applyForJob() {
    try {
      const JOBID = this.shadowRoot
        .getElementById("applyJobConfirmationModalMessage")
        .textContent.split(" ")
        .pop();

      const response = await utils.postJson(`job/apply`, {
        userid: this.userId,
        jobid: JOBID,
      });

      const result = await response.json();
      if (result.success) {
        services.infoNotifying("Job application applied successful");
        await this.dataFetch();
        this.populateTable();
        this.applyForJobConfirmationModal.style.display = "none";
      } else {
        services.errorNotifying("Error applying for job");
        this.applyForJobConfirmationModal.style.display = "none";
      }
    } catch (error) {
      console.error("Error applying for job:", error);
      services.errorNotifying("Error applying for job");
      this.applyForJobConfirmationModal.style.display = "none";
    }
  }

  //Revoke Job Confirmation Modal

  openRevokeForJobConfirmationModal(jobId) {
    this.shadowRoot.getElementById(
      "revokeJobConfirmationModalMessage"
    ).textContent = `Are you sure you want to proceed with withdrawing the job application associated with Job ID ${jobId}`;
    this.revokeForJobConfirmationModal.style.display = "block";
  }

  closeRevokeForJobConfirmationModal() {
    this.revokeForJobConfirmationModal.style.display = "none";
  }

  async revokeForJob() {
    try {
      const JOBID = this.shadowRoot
        .getElementById("revokeJobConfirmationModalMessage")
        .textContent.split(" ")
        .pop();

      const revokeInfo = {
        userid: this.userId,
        jobid: JOBID,
      };
      const response = await utils.postJson(`job/revoke`, revokeInfo);
      const result = await response.json();
      if (result.success) {
        services.infoNotifying("Job application revoked successful");
        await this.dataFetch();
        this.populateTable();
        this.revokeForJobConfirmationModal.style.display = "none";
      } else {
        services.errorNotifying("Error reevoking job application");
        this.revokeForJobConfirmationModal.style.display = "none";
      }
    } catch (error) {
      console.error("Error reevoking job application:", error);
      services.errorNotifying("Error reevoking job application");
      this.revokeForJobConfirmationModal.style.display = "none";
    }
  }
}

customElements.define("grid-base", GridBase);

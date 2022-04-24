class Note {
  #noteTitle = "";
  #noteText = "";

  constructor() {
    this.state = "EDIT";
    this.container = document.createElement("div");
    this.input = document.createElement("input");
    this.btnAdd = document.createElement("button");
    this.btnDelete = document.createElement("button");
    this.trash = document.createElement("i");

    this.btnAdd.classList.add("todo__add", "button");
    this.container.classList.add("todo__row");
    this.btnDelete.classList.add("button", "btnDeleteItem");
    this.trash.classList.add("fa", "fa-trash");

    this.input.placeholder = "Note...";

    this.btnDelete.appendChild(this.trash);
    this.container.appendChild(this.input);
    this.container.appendChild(this.btnAdd);
    this.container.appendChild(this.btnDelete);
  }

  setState() {
    if (this.state === "NOEDIT") {
      this.input.setAttribute("disabled", "true");
      this.btnAdd.style.display = "none";
      this.btnDelete.style.display = "block";
    } else if (this.state === "EDIT") {
      this.input.removeAttribute("disabled");
      this.btnAdd.style.display = "block";
      this.btnDelete.style.display = "none";
      this.input.focus();
    }
  }

  createNote() {
    this.input.textContent = this.#noteText;
    this.btnAdd.textContent = "Done";
    this.btnDelete.style.display = "none";

    this.btnAdd.addEventListener("click", (e) => {
      e.stopPropagation();
      this.#noteText = this.input.value;
      this.state = "NOEDIT";
      this.setState();
    });

    this.btnDelete.addEventListener("click", (e) => {
      e.stopPropagation();
      this.container.parentElement.removeChild(this.container);
    });

    this.container.addEventListener("click", (e) => {
      this.state = "EDIT";
      this.setState();
      this.input.focus();
    });

    return this.container;
  }
}

export default Note;

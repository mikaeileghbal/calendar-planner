class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  getNode() {
    let node = document.createElement("div");
    node.classList.add("todo");
    node.innerHTML = this.setInnerHtml(this.description);
    return node;
  }

  setInnerHtml(content) {
    return `<p>${content}</p>
                <button class="button--check first">Check</button>
                <button class="button--delete">Delete</button>`;
  }
}

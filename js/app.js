// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here
(function () {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const errorMsg = document.getElementById("error-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") {
      errorMsg.classList.remove("hidden");
      return;
    }
    errorMsg.classList.add("hidden");

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "item-text";
    span.textContent = text;

    const btn = document.createElement("button");
    btn.className = "delete-btn";
    btn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";
  });

  list.addEventListener("click", function (e) {
    if (e.target.classList.contains("item-text")) {
      e.target.closest("li").classList.toggle("completed");
    }
    if (e.target.classList.contains("delete-btn")) {
      e.target.closest("li").remove();
    }
  });
})();



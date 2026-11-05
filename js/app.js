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
  const filterAll = document.getElementById("filter-all");
  const filterActive = document.getElementById("filter-active");
  const filterDone = document.getElementById("filter-done");
  const counter = document.getElementById("counter");

  let currentFilter = "all";

  function applyFilter() {
    const items = list.querySelectorAll("li");
    items.forEach(function (li) {
      const done = li.classList.contains("completed");
      let show = true;
      if (currentFilter === "active") show = !done;
      if (currentFilter === "done") show = done;
      li.hidden = !show;
      li.style.display = show ? "" : "none";
    });
  }

  function updateCounter() {
    const left = list.querySelectorAll("li:not(.completed)").length;
    counter.textContent = left + (left === 1 ? " item left" : " items left");
  }

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
    applyFilter();
    updateCounter();
  });

  list.addEventListener("click", function (e) {
    if (e.target.classList.contains("item-text")) {
      e.target.closest("li").classList.toggle("completed");
    }
    if (e.target.classList.contains("delete-btn")) {
      e.target.closest("li").remove();
    }
    applyFilter();
    updateCounter();
  });

  filterAll.addEventListener("click", function () {
    currentFilter = "all";
    applyFilter();
  });

  filterActive.addEventListener("click", function () {
    currentFilter = "active";
    applyFilter();
  });

  filterDone.addEventListener("click", function () {
    currentFilter = "done";
    applyFilter();
  });

  updateCounter();
})();

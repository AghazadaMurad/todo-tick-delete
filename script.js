"use strict";

const input = document.querySelector(".addinput");
const addBtn = document.querySelector(".addbtn");

const allTasks = document.querySelector(".tasks");

let tasks = [];

let taskHtml = [];

addBtn.addEventListener("click", () => {
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    input.style.borderBottom = "3px solid green";
    displayTasks();
  } else {
    input.style.borderBottom = "3px solid red";
  }
  input.value = "";
  input.focus();
});

const displayTasks = () => {
  allTasks.innerHTML = "";

  tasks.forEach((task) => {
    const html = `<li class="task">
    <p class="task-name">${task}</p>
    <div class="task-btns">
      <button class="aprovebtn"><i class="fa-solid fa-check"></i></button>
      <button class="deletebtn"><i class="fa-solid fa-x"></i></button>
    </div>
  </li>`;
    const parg = document.querySelectorAll(".task p");
    // console.log(parg);

    // taskHtml.push(html);

    allTasks.innerHTML += html;

    const tick = document.querySelectorAll(".aprovebtn");
    const remove = document.querySelectorAll(".deletebtn");
    const todos = document.querySelectorAll(".task");

    const tickTask = (index) => {
      parg[index].classList.add("green");
      // parg[index].style.textDecoration = "line-through";
      displayTasks();
      console.log(parg[index]);
    };

    tick.forEach((appr, index) => {
      appr.addEventListener("click", () => {
        tickTask(index);
        console.log(index);
      });
    });

    remove.forEach((del, index) => {
      del.addEventListener("click", () => {
        deleteTask(index);
      });
    });
  });
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  displayTasks();
};

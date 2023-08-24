import resultBox from "./showDataComponent/showDataResult";
import { action, setActionName } from "./actionsComponent/actionsComponent";
import { popUp, test } from "./showDataComponent/showData";
import { createUserForm, testUser } from "./createUserComponent/createUser";
import submitInput from "./submitButtonComponent/submit-btn";
import submitUser from "./submitButtonComponent/submit-btn-user";

import "./style.scss";

const container = document.querySelector(".container")!;

container.append(submitInput);
container.prepend(popUp);
container.prepend(createUserForm);
container.append(resultBox!);

const popUpSpans = document.querySelectorAll(
  ".actions__value"
) as NodeListOf<Element>;

const resultBoxActionName = document.querySelector(".result__actions-name");
const resultBoxActionResult = document.querySelector(".result__actions-result");
const userInputForm = document.querySelector(".create-user__login")!;
const actionBtnBox = document.querySelector(
  ".actions__action-btns"
) as Element | null;

let popUpCurentValues: number[];
let tempArr: string[] = Array(5);

userInputForm.appendChild(submitUser);

submitUser.addEventListener("click", (e) => {
  e.preventDefault();

  const temp = Array.from(document.querySelectorAll(".login__input")).map(
    (e) => (e as HTMLInputElement).value
  );
  testUser(temp);
});

submitInput.addEventListener("click", (e) => {
  e.preventDefault();
  const arr = Array.from(popUpSpans);
  popUpCurentValues = test(arr)!.map((e) => +e);
});

actionBtnBox!.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target) return;
  const clickedActionBtn = (e.target as HTMLButtonElement).closest(
    ".actions__btn"
  );
  if (!clickedActionBtn) return;
  if (clickedActionBtn.getAttribute("id") == "sum") {
    resultBoxActionResult!.textContent = String(action("+", popUpCurentValues));
    resultBoxActionName!.textContent = setActionName("+");
  }
  if (clickedActionBtn.getAttribute("id") == "substract") {
    resultBoxActionResult!.textContent = String(action("-", popUpCurentValues));
    resultBoxActionName!.textContent = setActionName("-");
  }
  if (clickedActionBtn.getAttribute("id") == "multiply") {
    resultBoxActionResult!.textContent = String(action("*", popUpCurentValues));
    resultBoxActionName!.textContent = setActionName("*");
  }
  if (clickedActionBtn.getAttribute("id") == "divide") {
    resultBoxActionResult!.textContent = String(action("/", popUpCurentValues));
    resultBoxActionName!.textContent = setActionName("/");
  }
});

import {
  getValues,
  clearInputs,
} from "../getInputDataComponent/getInputValues";
import popUpContainer from "./showDataHTML/showData.html";
import htmlToElment from "../utils/htmlToElement";
import validating from "../validateFormComponent/validate";
import "./showDataSCSS/showData.scss";

const popUp = htmlToElment(popUpContainer)!;

let arrayInputs: string[] = Array(2);

function getData() {
  try {
    if (!validating(+getValues()[0], +getValues()[1])) {
      throw alert(`something wrong: ${new Error("Wrong Type")}`);
    }
    arrayInputs = Array.from(Array(2), (_, i) => getValues()[i]);
    clearInputs();
  } catch (err) {
    //alert(err);
  }
}

function test(arr: Element[]): string[] | undefined {
  getData();
  if (arrayInputs) {
    arr.forEach((item, index) => {
      item.textContent = arrayInputs[index];
    });
    return arrayInputs;
  } else {
    alert("empty array");
  }
}
export { popUp, test };

import createUserFormBlock from "./createUser.html";
import htmlToElement from "../utils/htmlToElement";
import "./createUser.scss";

const createUserForm = htmlToElement(createUserFormBlock)!;

interface IUser {
  name: string;
  surname: string;
  thirdName: string;
  password: string;
  birthdayDate: string;
  personalLogin: string;
}

type TypeUser = IUser;

const createLogin = (...fullname: string[]): string => {
  const login = fullname
    .map((e) => {
      return e.slice(0, 1);
    })
    .join("");

  return login;
};

function testUser(arr: string[]): object | undefined {
  const newUser: TypeUser = {
    name: arr[0],
    surname: arr[1],
    thirdName: arr[2],
    password: arr[3],
    birthdayDate: arr[4],
    personalLogin: createLogin(arr[0], arr[1], arr[2]),
  };
  console.log(newUser);
  return newUser;
}

export { createUserForm, testUser };

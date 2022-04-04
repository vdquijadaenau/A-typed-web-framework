import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.createUser({ name: "Jorge", age: 20 });
const rootElement = document.getElementById("root");

if (rootElement) {
  const userform = new UserForm(rootElement, user);
  userform.render();
} else {
  throw new Error("Root element not found");
}

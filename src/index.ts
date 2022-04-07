import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { Userlist } from "./views/UserList";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.createUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new Userlist(root, users).render();
  }
});
users.fetch();

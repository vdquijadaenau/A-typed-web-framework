import { User } from "./models/User";

const user = new User({ name: "victor", age: 12 });

user.set({ name: "jorge", age: 20 });
console.log(user.get("name"));

import { AxiosResponse } from "axios";
import { Attributes } from "./Atrributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { APISync } from "./APISync";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static createUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new APISync<UserProps>(rootUrl),
      new Eventing()
    );
  }
}

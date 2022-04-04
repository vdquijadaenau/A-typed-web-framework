import { Attributes } from "./Atrributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { APISync } from "./APISync";
import { Collection } from "./Collection";

export interface UserProps {
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

  static createUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.createUser(json)
    );
  }
}

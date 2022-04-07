import { User, UserProps } from "../models/User";
import { CollectionView } from "./CollectionView";
import { UserShow } from "./UserShow";
import { View } from "./View";

export class Userlist extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSaveClick = (): void => {
    this.model.save();
  };
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      this.model.set({ name: input.value });
    }
  };
  template(): string {
    return `
        <div>
            <input placeholder ="${this.model.get("name")}"/>
            <button Class="set-name">Change name</button>
            <button class="set-age">Set ramdom age</button>
            <button class="save-model">Save user</>
        </div>
        `;
  }
}

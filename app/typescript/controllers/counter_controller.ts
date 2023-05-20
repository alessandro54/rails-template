import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["value"];

  declare readonly valueTarget: HTMLSpanElement;

  public decrement(): void {
    this.valueTarget.innerText = (
      parseInt(this.valueTarget.innerText) - 1
    ).toString();
  }

  public increment(): void {
    this.valueTarget.innerText = (
      parseInt(this.valueTarget.innerText) + 1
    ).toString();
  }
}

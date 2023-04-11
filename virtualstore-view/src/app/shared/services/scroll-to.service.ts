import { Injectable } from "@angular/core";

@Injectable()
export class ScrollToService {
  public run(container: HTMLElement, scrollValue: number): void {
      container.scrollLeft += scrollValue;
  }
}
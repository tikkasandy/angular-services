import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({
  providedIn: `root`
})
export class AppCounterServices {
  counter = 0

  constructor(public logService: LogService) {
  }

  increase() {
    this.logService.log('increase counter')
    this.counter += 1
  }

  decrease() {
    this.logService.log('decrease counter')
    this.counter -= 1
  }
}

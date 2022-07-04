import {Injectable} from "@angular/core";

@Injectable()
export class TestService {
  sum(arg1: number, arg2: number): number | undefined {
    if(!arg2) {
      return undefined;
    }
    return arg1 + arg2;
  }
}

import create from "./create";
import "alpinejs";
import { userCreateInterface } from "../interfaces/userCreateInterface";

declare global {
   interface Window {
      create: () => userCreateInterface;
   }
}

window.create = create;

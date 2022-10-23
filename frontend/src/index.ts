import create from "./create";
import "alpinejs";

declare global {
   interface Window {
      create: any;
   }
}

window.create = create;

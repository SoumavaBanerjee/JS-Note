import type { Middleware } from "../../interfaces";

let timer: any;
export const bundleMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);

  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("every 1000 miliseconds in Africa, a second passes");
  }, 1000);
};

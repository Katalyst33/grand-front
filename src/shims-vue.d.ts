declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "vue-json-pretty";
declare module "process";
declare module "vue-json-viewer";
// declare module "crypto";

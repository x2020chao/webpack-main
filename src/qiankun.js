import { registerMicroApps, start } from "qiankun";
registerMicroApps([
  {
    name: "webpack-sub",
    entry: "http://127.0.0.1:8080/",
    container: "#webpack-sub-container",
    activeRule: "/mana",
    props: {},
  },
  {
    name: "vite-sub",
    entry: "http://127.0.0.1:5174/",
    container: "#vite-sub-container",
    activeRule: "/mana",
    props: {},
  },
]);

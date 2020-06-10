/** @jsx createElement */
import { createElement } from "@bikeshaving/crank";
import { renderer } from "@bikeshaving/crank/dom";
import App from "./app";

const wrapper = document.querySelector("#app");

renderer.render(<App />, wrapper);

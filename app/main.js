import "@riotjs/hot-reload";
import { component } from "riot";
import Wrapper from "./wrapper.riot";

component(Wrapper)(document.getElementById("app"), {
  title: "Hi there!",
});

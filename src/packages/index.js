import Button from "./Button";
import Card from "./Card";
import Badge from "./Badge";

const components = {
  Button,
  Card,
  Badge
};

const install = (Vue) => {
  Object.keys(components).map((key) => {
    const component = components[key];
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const Wt = {
  install,
};

Object.keys(components).map((key) => {
  const component = components[key];
  Wt[component.name] = component;
});

export default Wt;

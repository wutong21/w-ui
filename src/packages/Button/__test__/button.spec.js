import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import Button from "../button.vue";

describe("Button", () => {
  test("snapshot test", () => {
    const wrapper = mount(Button);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

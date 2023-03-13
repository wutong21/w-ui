import Card from "./card.vue";

Card.install = function (Vue) {
  Vue.component(Card.name, Button);
};

export default Card;

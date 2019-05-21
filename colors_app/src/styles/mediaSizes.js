export default {
  up() {},

  down(size) {
    const sizes = {
      xl: "1600px",
      lg: "1199px",
      md: "991px",
      sm: "767px",
      xs: "575px"
    };
    return `@media (max-width: ${sizes[size]})`;
  }
};

import { publish } from "gh-pages";

publish(
  "build",
  {
    branch: "gh-pages",
    repo: "https://github.com/Dorian-Grim/Dorian-Grim.github.io.git",
    user: {
      name: "Dorian",
      email: "buragairineldorian@gmail.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);

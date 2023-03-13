import { publish } from "gh-pages";

publish(
  "build", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/7soapte/utm-info-quizz.git", // Update to point to your repository
    user: {
      name: "Andrei Dumitrache", // update to use your name
      email: "andrei.dumitrache@hotmail.com", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);

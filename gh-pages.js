import { publish } from "gh-pages";

publish(
  "build",
  {
    branch: "gh-pages",
    repo: "https://github.com/7soapte/utm-info-quizz.git",
    user: {
      name: "Andrei Dumitrache",
      email: "andrei.dumitrache@hotmail.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);

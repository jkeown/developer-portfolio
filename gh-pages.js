import { publish } from "gh-pages";

publish(
  "build",
  {
    branch: "gh-pages",
    repo: "https://github.com/jkeown/email-developer-portfolio.git",
    user: {
      name: "Jared Keown",
      email: "jkeownwebdev@gmail.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);

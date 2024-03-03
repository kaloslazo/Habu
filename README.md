![banner habu](docs/videos/bannerHabu.gif)

Experience the minimalist design of Neovim's based dashboard & Catppuccin Mocha palette in your browser with Habu. Simple to set up and fully customizable. 🚀 Take a look at this productive space with this [demo page](https://habu.netlify.app/), currently hosted on [Netlify](https://app.netlify.com/).

## ⚙️ Development

If you're planning to improve or delete features you must look at the following guide that explains you how to get started.

1. Install packages, this starter page was created using Tailwindcss and custom plugins for catppuccin palette, so you must install it, do `npm install`.
2. After dependencies are installed, you can run the script defined in the package.json as `habu:build_tailwind`. This will refresh in real times your changes using a web server.
3. If you're done, just upload the `app` folder to your hosting or create a image container.

> ⚠️ _For custom data you must modify the json files at app/db with your own information. The application made a get request to Open-Meteo, a free weather API, thanks to the team for the free access!_

## 🐋 Docker Selfhost

Selfhosted means that you're gonna run this website in your own computer, no external server needed. To start you must check the following steps. We're gonna use docker. By this method we will not have cors problems.

1. Install docker, check de [official documentation](https://docs.docker.com/get-docker/).
2. Run the build for the container (.dockerfile) with the following command `docker build -t app .`.
3. After image it's created map a port for running as background with `docker run -d -p 8080:80 --restart=always app`.

If you followed the steps your site must be running at `http://localhost:8080/` (_if you change the port in the step [3] change 8080 for your desired port_). If in the process you got an error or something work unexpected, please submit a PR.

> ⚠️ _If problems of daemon appears, please run as a superuser. If you're using firefox maybe this [extension](https://addons.mozilla.org/es/firefox/addon/custom-new-tab-page/) will interest you._

## 📄 License

Released under [MIT](./LICENSE) License. Developed by [Kalos Lazo](https://www.github.com/kaloslazo) from Perú. If you're interested in contributing, feel free to fork this repository, make your changes and submit a pull request!

- Under the terms of this license you are permitted to:
  - **Modify**: You can alter, transform, or build upon this work.
  - **Reuse**: You can use the content for personal or commercial purposes.
- On the other hand, under this license you are required to:
  - **Include the original license**: A copy of the original MIT license must be included with any substantial portions of this software.
  - **Attribute the work**: If you use parts of this source code, an acknowledgment in the form of a link back to this repository is appreciated but not required.

![banner habu](docs/videos/bannerHabu.gif)

<div align="justify">
Experience the minimalist design of Neovim's dashboard in your browser with Habu. This startpage for Firefox blends the efficient layout of a developer's environment with the warm and inviting Catppuccin color palette. Simple to set up and fully customizable, Habu transforms your new tab page into a serene and productive space.
</div>

🚀 Check out the startpage by visiting this [link](https://habu.netlify.app/), currently hosted on [Netlify](https://app.netlify.com/).

## ✋ Prerequisites

### Development

### Production

## 🐋 Docker Selfhost

Selfhosted means that you're gonna run this website in your own computer, no external server needed. To start you must check the following steps. We're gonna use docker. By this method we will not have cors problems.

1. Install docker, check de [official documentation](https://docs.docker.com/get-docker/).
2. Run the build for the container (.dockerfile) with the following command `docker build -t app .`.
3. After image it's created map a port for running as background with `docker run -d -p 8080:80 app`.

If you followed the steps your site must be running at `http://localhost:8080/` (_if you change the port in the step [3] change 8080 for your desired port_). If in the process you got an error or something work unexpected, please submit a PR.

> ⚠️ _If problems of daemon appears, please run as a superuser. If you're using firefox maybe this [extension](https://addons.mozilla.org/es/firefox/addon/custom-new-tab-page/) will interest you_

## 📄 License

Released under [MIT](./LICENSE) License. Developed by [Kalos Lazo](https://www.github.com/kaloslazo) from Perú. If you're interested in contributing, feel free to fork this repository, make your changes and submit a pull request!

- Under the terms of this license you are permitted to:
  - **Modify**: You can alter, transform, or build upon this work.
  - **Reuse**: You can use the content for personal or commercial purposes.
- On the other hand, under this license you are required to:
  - **Include the original license**: A copy of the original MIT license must be included with any substantial portions of this software.
  - **Attribute the work**: If you use parts of this source code, an acknowledgment in the form of a link back to this repository is appreciated but not required.

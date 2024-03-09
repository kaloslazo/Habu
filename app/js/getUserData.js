// AUTHOR: Kalos lazo
// GITHUB: @kaloslazo

const USERNAME_ELEMENT = document.getElementById("username_data");
const LINKS_GRID = document.getElementById("links_grid");

const setupUserData = async () => {
  const userData = await fetch("db/userData.json").then((res) => res.json());
  const userNickname = userData.nickname;
  const userSocialLinks = userData.socialLinks;

  USERNAME_ELEMENT.textContent = userNickname;
  userSocialLinks.map((eachLink) => {
    let currentLink = eachLink;

    return (LINKS_GRID.innerHTML += `
        <a href="${currentLink.url}" target="_blank" class="inline-flex items-center justify-center transition-colors ease-linear border-2 border-transparent rounded-lg hover:border-ctp-blue bg-ctp-base aspect-square hover:bg-ctp-surface0/50">
          <span class="${currentLink.iconClass} text-6xl" alt="Icon ${currentLink.url}"></span>
        </a>`);
  });
};

setupUserData();

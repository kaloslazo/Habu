// AUTHOR: Kalos lazo
// GITHUB: @kaloslazo

const USERNAME_ELEMENT = document.getElementById("username_data");

const getCurrentUsername = async () => {
  const dbUser = await fetch("db/userData.json").then((res) => res.json());

  USERNAME_ELEMENT.textContent = dbUser.username;
};

getCurrentUsername();

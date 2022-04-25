async function auth(token) {

  return new Promise((resolve, reject) => {
    fetch("https://discordapp.com/api/users/@me", {
      method: "GET",
      headers: { authorization: token },
    })
      .then((res2) => res2.json())
      .then(async (userResponse) => {

        userResponse.tag = `${userResponse.username}#${userResponse.discriminator}`;
        userResponse.avatarURL = userResponse.avatar
          ? `https://cdn.discordapp.com/avatars/${userResponse.id}/${userResponse.avatar}.png?size=1024`
          : null;

        resolve(userResponse)
      })
      .catch((err) => reject(null))

  })

}

export default auth
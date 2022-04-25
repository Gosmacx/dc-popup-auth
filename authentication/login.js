import auth from './auth'

function login(code, id, key) {

    return new Promise(async (resolve, reject) => {

        let scopes = ["identify", "guilds"];

        const data = new FormData();
        data.append("client_id", id);
        data.append("client_secret", key);
        data.append("grant_type", "authorization_code");
        data.append("redirect_uri", "http://localhost:3000/callback");
        data.append("scope", scopes.join(" "));
        data.append("code", code);

        fetch("https://discordapp.com/api/oauth2/token", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then(async (response) => {

                let token = `${response.token_type} ${response.access_token}`

                let userData = await auth(token)
                if (userData) {
                    resolve({
                        user: userData,
                        token: token
                    })
                }

            })
            .catch(() => {
                reject(null)
            })
    })
}

export default login;
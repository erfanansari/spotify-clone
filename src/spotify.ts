// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "3f466361074746308b9850e77792b301";
const redirectUri = "http://localhost:3000/";
const scopes = [
    "streaming",
    "app-remote-control",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
    "user-read-email",
    "user-read-private",
    "user-library-modify",
    "user-library-read",
];


interface Token {
    access_token: string;
    token_type: string;
    expires_in: string;
}

export const getTokenFromResponse = (): Token => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((acc: any, cur) => {
            const [key, value] = cur.split("=");
            acc[key] = decodeURIComponent(value);
            return acc;
        }, {});
};
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

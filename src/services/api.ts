import axios from "axios";

const { CLIENT_ID } = process.env;

const api = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  headers: {
    'Client-ID': CLIENT_ID,
  }
})

export { api };

const defaultSettings = {
  REACT_APP_API_URL: "https://jsonplaceholder.typicode.com/",
};
const config = { ...defaultSettings, ...process.env };
export default config;

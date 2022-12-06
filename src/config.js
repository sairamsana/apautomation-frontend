const defaultSettings = {
  REACT_APP_API_URL: "http://localhost:5004/",
};
const config = { ...defaultSettings, ...process.env };
export default config;

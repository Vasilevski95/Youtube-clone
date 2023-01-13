import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

//We fetch from Api, first we pass BASE_URL in template string and we add something to that url
//That is url string which we are getting as a parameter. That is going to allow me to call /baseUrl/getChannel or I can change second part to /getVideos
//And then I pass the options object as the second parameter into axios.get function
//Instead of response we destructure data {data}, and the only thing this function will do is to return data
//EXPLANATION: This function allows us to call this API, pass dynamic url, and then call it within any component in my application

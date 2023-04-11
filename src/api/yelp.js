import axios from "axios";
import yelpSecretKey from "./yelpKey";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${yelpSecretKey}`
    }
});


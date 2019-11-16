import axios from 'axios';

const KEY = 'AIzaSyD0U3amrIKfSj1I4gUKk96jxZXFk0KLIR0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

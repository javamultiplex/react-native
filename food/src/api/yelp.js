import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer A2ow_YbedQ0NL9k5rRyZsqvg1DcrBOW9W9sA4BTYWlyq2rJ0wLn47PJY3ORXxs8FmvCHBdU0BpJc692k6MVvtliV0YmDlij_pUB6oVsJAR_85IiM0CiD4beMwVm5X3Yx'
    }
});
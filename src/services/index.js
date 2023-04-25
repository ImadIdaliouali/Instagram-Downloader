const axios = require('axios').default;

const params = {
    __a: 1,
    __d: "dis",
};

const getData = (link) => axios.get(link, { params });

export { getData };
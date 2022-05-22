import api from '../index';

const pokemon = {
    get: (payload) => {
        return api().get('/pokemon');
    },

    getByName: (name) => {
        return api().get(`/pokemon/${name}`);
    }
};

export default pokemon;  
const
    state = {
        selected: null
    },

    getters = {
        getSelectedPokemon: (state) => state.selected,
    },

    mutations = {
        SET_SELECTED_POKEMON: (state, payload) => {
            state.selected = payload;
        }
    },
    actions = {
        setSeletedPokemon: ({commit}, payload) => commit('SET_SELECTED_POKEMON', payload),
    };

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
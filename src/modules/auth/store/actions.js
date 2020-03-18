
export default {

    actionSetUser({commit}, playlod){
        commit('setUser', playlod)
    },
    actionSetToken({commit}, playlod){
        commit('setToken', playlod)
    }

}
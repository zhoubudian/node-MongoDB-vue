import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    username:'',
}

const mutations = {
    setUserName(state,status){
        state.username = status;
    }
}

const getters = {

}

const actions = {
    actionsUserName({commit},status){
        commit('setUserName',status)
    }

}

export default new Vuex.Store({
    state:state,
    mutations:mutations,
    getters:getters,
    actions:actions,
})
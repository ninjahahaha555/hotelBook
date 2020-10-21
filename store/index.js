export const state = () => ({
  data: []
})
export const mutations = {
  input (state, { email, pass, name, lastname, age }) {
    state.data.push({ email, pass, name, lastname, age })
  }
}
export const getters = {
  data (state) {
    return state.data
  }
}

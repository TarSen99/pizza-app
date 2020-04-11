const defaultState = () => {
    return {
        products: []
    }
}

const actions = {

}

const mutations = {
    addProduct(state, value) {
        const count = value.count || 1;
        const id = value.id

        const currProductIndex = state.products.findIndex(item => item.id === id)

        if (currProductIndex !== -1) {
            const newProduct = {
                ...state.products[currProductIndex],
                count: state.products[currProductIndex].count + 1
            }

            state.products.splice(currProductIndex, 1, newProduct)

            return
        }

        state.products.push({
            ...value,
            count
        })
    }
}

const getters = {

}

export default {
    namespaced: true,
    state: defaultState(),
    actions,
    mutations,
    getters
}
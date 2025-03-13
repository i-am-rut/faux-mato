import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if(existingItem) {
                existingItem.amount += 1
            } else {
                state.items.push({...action.payload, amount: 1})
            }
        },
        removeItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if(existingItem.amount > 1) {
                existingItem.amount -= 1
            } else {
                state.items = state.items.filter(item => item.id !== action.payload.id)
            }

        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer
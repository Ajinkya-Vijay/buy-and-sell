import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
    persist(
        (set,get)=>({
            cart : {},
            addCart : (item) =>
            set((state)=>({
                cart : {...state.cart, [item.id] : item
                },
            })),
            removeFromCart: (id)=>
            set((state)=>{
                const updatedCart = {...state.cart}
                delete updatedCart[id.id]
                return {cart : updatedCart}
            }),
        }), 
        {
            name : 'cart-storage',
        }
    )
)
import React from 'react'
import CategoryNav from '../CategoryNav'

interface ProductslayoutProps{
    children : React.ReactNode;
}
function Productslayout({ children }:ProductslayoutProps) {
  return (
    <div>
        <CategoryNav/>
        { children }
    </div>
  )
}

export default Productslayout;
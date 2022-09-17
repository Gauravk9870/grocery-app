import React from 'react'
import ProductScroller from './ProductScroller';
import { FruitsContext } from '../App';
const FruitsCarosuel = () => {
  return (
    <FruitsContext.Consumer>{(fruits) => {
      return (
        <ProductScroller category={fruits} name="Fruits" />
      )
    }}
    </FruitsContext.Consumer>
  )
}

export default FruitsCarosuel
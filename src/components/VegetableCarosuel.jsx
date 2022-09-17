import React from 'react'
import ProductScroller from './ProductScroller';
import { VegetablesContext } from '../App';



const VegetableCarosuel = () => {
  return (
    <VegetablesContext.Consumer>{(vegetables) => {
      return (
        <ProductScroller category={vegetables} name="Vegetables" />
      )
    }}
    </VegetablesContext.Consumer>
  )
}

export default VegetableCarosuel
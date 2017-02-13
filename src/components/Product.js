import React from 'react'

//5/ As our product will grow, it'd be better to extract is into its own component
const Product = ({ name }) => (
  <span>
    { name }
  </span>
)

export default Product

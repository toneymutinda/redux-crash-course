import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = () => (
  <ContentLoader 
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="20" rx="3" ry="3" width="350" height="8" /> 
    <rect x="0" y="40" rx="3" ry="3" width="350" height="8" /> 
    <rect x="0" y="60" rx="3" ry="3" width="350" height="8" /> 
    <rect x="0" y="120" rx="3" ry="3" width="280" height="6" />
  </ContentLoader>
)

export default CardLoader
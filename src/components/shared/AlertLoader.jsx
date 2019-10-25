import React from "react"
import ContentLoader from "react-content-loader"

const AlertLoader = () => (
  <ContentLoader 
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="20" rx="3" ry="3" width="800" height="20" />
  </ContentLoader>
)

export default AlertLoader
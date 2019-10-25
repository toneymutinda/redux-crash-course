import React from "react"
import ContentLoader from "react-content-loader"

const TableLoader = () => (
  <ContentLoader 
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="20" rx="3" ry="3" width="180" height="10" /> 
    <rect x="200" y="20" rx="3" ry="3" width="300" height="10" />
    <rect x="0" y="40" rx="3" ry="3" width="180" height="10" /> 
    <rect x="200" y="40" rx="3" ry="3" width="300" height="10" />
    <rect x="0" y="60" rx="3" ry="3" width="180" height="10" /> 
    <rect x="200" y="60" rx="3" ry="3" width="300" height="10" />
  </ContentLoader>
)

export default TableLoader
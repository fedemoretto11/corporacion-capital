import React from "react"
import ContentLoader from "react-content-loader"

const EmpleoLoader = (props) => (
  <ContentLoader 
  speed={2}
  width={550}
  height={192}
  viewBox="0 0 550 192"
  backgroundColor="#cdcdcd"
  foregroundColor="#2f4f6f"
  {...props}
>
  <rect x="20" y="69" rx="7" ry="7" width="125" height="44" /> 
  <rect x="248" y="32" rx="0" ry="0" width="173" height="10" /> 
  <rect x="248" y="92" rx="0" ry="0" width="180" height="4" /> 
  <rect x="268" y="107" rx="0" ry="0" width="140" height="4" /> 
  <rect x="270" y="123" rx="0" ry="0" width="140" height="4" />
</ContentLoader>
)

export default EmpleoLoader


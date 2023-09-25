import React from "react"
import ContentLoader from "react-content-loader"

const JobDescription = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={400}
    viewBox="0 0 500 400"
    backgroundColor="#cdcdcd"
    foregroundColor="#2f4f6f"
    {...props}
  >
    <rect x="52" y="92" rx="3" ry="3" width="88" height="6" /> 
    <rect x="58" y="106" rx="3" ry="3" width="52" height="6" /> 
    <rect x="18" y="64" rx="3" ry="3" width="230" height="8" /> 
    <rect x="338" y="141" rx="0" ry="0" width="0" height="1" /> 
    <rect x="51" y="165" rx="3" ry="3" width="88" height="6" /> 
    <rect x="57" y="179" rx="3" ry="3" width="52" height="6" /> 
    <rect x="17" y="137" rx="3" ry="3" width="230" height="8" /> 
    <rect x="48" y="237" rx="3" ry="3" width="88" height="6" /> 
    <rect x="54" y="251" rx="3" ry="3" width="52" height="6" /> 
    <rect x="14" y="209" rx="3" ry="3" width="230" height="8" /> 
    <rect x="47" y="310" rx="3" ry="3" width="88" height="6" /> 
    <rect x="53" y="324" rx="3" ry="3" width="52" height="6" /> 
    <rect x="13" y="282" rx="3" ry="3" width="230" height="8" />
  </ContentLoader>
)

export default JobDescription


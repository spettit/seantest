import React from 'react'
import { graphql } from 'gatsby'

export default ( {data} ) => {
   return (
    <div>
    <h1>Images</h1>
    {data.allFile.edges.map(( {node} ) => {
        console.log(node.relativePath)
        // return (<img src={`../${node.absolutePath}`} />)
        return (<img src={node.publicURL} width={'300px'}/>)
    })
}
    
    </div>
    )
   }

    export const query = graphql`
    query {
  allFile(filter: {internal: {}, extension: {eq: "png"}}) {
    edges {
      node {
        absolutePath
        relativePath
        publicURL
      }
    }

}

    }`
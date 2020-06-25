import React from 'react'
import styled from 'styled-components'

const UnderLine = styled.div`
&:hover {
    border-bottom: 6px dotted ${p => p.underlineColor};
}
`
export default function underlineDotEffect({undelineColor="#cfd8dc", renderFunction=()=>{}}) {
    return (
       <UnderLine>
        {
            renderFunction()
        }
       </UnderLine>
    )
}

import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
	text-align: center;
	color: ${p => p.color || '#808080'};
    border-radius: 10px;
    background-clip: padding-box;
    box-shadow: 0px 3px 3px 0px rgba(226, 228, 231, 1);
`
const CardTop = styled.div`
    position:relative;
    border: ${p => p.topBorder ||'1px solid #C8CFD8'};
    background-color: ${p =>  p.topBackgroundColor || '#E6E9ED'};
    background: ${p => p.StyledLabelCardtopBackground};
    padding: 20px 20px 20px 20px;
    border-top-right-radius: 10px;
    & h1{
    z-index: 100;
    font-size: 1rem;
    color: ${p=> p.contentHeaderColor || '#808080'};
    display: inline;
    position: relative;
    bottom: -30px;
    padding: 0.2rem 0.5rem;
    text-transform: uppercase;
    border: ${p => p.topBorder ||'1px solid #C8CFD8'};
    background-color: ${p =>  p.topBackgroundColor || '#E6E9ED'};
    border-radius: 20px;
    }
`
const CardContent = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: auto;
    padding: 2rem 1.2rem 2rem 1.2rem;
    border-top: 0 none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-clip: padding-box;
    border: ${p => p.topBorder ||'1px solid #C8CFD8'};
    background-color: ${p => p.contentBackgroundColor ||'#F5F7FA'};
    & div:first-of-type{
        
        font-size: 1.5em;
        line-height: 0.8em; 
    
    }
    & div:second-of-type {
        display: block;
        font-size: 0.8em;
        line-height: 0.7em; 
    }
    & div{
        padding-bottom: 1rem;
    }

`
const StyledLabelCard = ({headerText, contentText, subContentText,  styles={}}) => {
    
    
    return (
        <Card color={styles.color}>
            <CardTop>
            <h1>Hello</h1>
            </CardTop>
            <CardContent>
                <div>{contentText}</div>
                <div>{subContentText}</div>
            </CardContent>
    </Card>
    )
}

export default StyledLabelCard 
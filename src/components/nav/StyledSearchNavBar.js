import React, {useState} from 'react'
import styled from 'styled-components'
import Anime from "react-anime";
const Container = styled.div`
position: relative;
  max-width: 1000px;
  margin: 130px auto;
  background-color: #ecf0f1;
  border-radius: $border-radius;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`
const NavBar = styled.div`
  & ul {
    border-radius: $border-radius;
    overflow: hidden;
  }
  
  & li {
    float: left;
    width: 20%;
    
    &:hover a::before {
      right: 0;
      left: 0;
    }
  }
  
  & a {
    color: #848484;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    padding: 20px 0;
    display: block;
    position: relative;
    transition: all 0.3s ease;
    
    &:hover {
      color: $border;
    }
    
    &::before {
      content: "";
      transition: all 0.4s ease-in-out;
      position: absolute;
      right: 50%;
      left: 50%;
      bottom: 0;
      height: 2px;
      background-color: $border;
    }
    
    &:hover::before {
      right: 0;
      left: 0;
    }
  }
  
  & span {
    display: block;
  }

`

const SearchBar = styled.div`
  
  
  & form {
  width: 90%;
  margin: 10px auto;
}

& input {
  width: 80%;
  margin-left: 10%;;
  padding: 10px 5%;
  text-align: left;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #90ee90;
  font: $font;
  color: #888;
  border-radius: 4px;
  transition: box-shadow 0.5s ease;

    &:focus, &:active {
        box-shadow: 0 0 10px #90ee90;
    }
    }
`

const SearchButton = styled.button`
  position: absolute;
  left: 90%;
  top: 0%;
  width: 10%;
  height: 100%;
  border: none;

  & svg{
    margin-right: 10px
  }
`

const StyledSearchNavBar = ({headings=[]}) => {

    const [openSearch , setOpenSearch] = useState(false)
  
    return (
        <>
        <Container>
            <NavBar>
                <ul>
                    {
                        headings.map((header , index) => {
                            return (
                                <li key={index}>
                                    <a href={header.link || '#'}>
                                        <i className={header.icon}></i>
                                        <span>{header.label}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
           
      
                    
                </ul>
                <SearchButton onClick={() => {setOpenSearch(!openSearch)}}>
                    <svg  width="1em" height="1em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                    Search
                    </SearchButton>
       
              
            </NavBar>

        </Container>
        <div>
        { 
                  openSearch &&
                  < Anime opacity={[0, 1]} translateY={-120} delay={(e, i) => i * 400}>
                   <SearchBar>
                      <form >
                          <input type="text" placeholder="Enter your query and hit Enter" ariar-aria-label="search-input" />
                        </form>
                    </SearchBar>
                  </Anime>
                }
        </div>

  </>
    )
}

export default StyledSearchNavBar
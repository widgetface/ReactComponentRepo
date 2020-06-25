import React, { useEffect,useState, useRef}  from 'react'
import './effects.scss'

let index = 1
const Reader = ({text, splitter=' ', speed=1000, loop=false} ) => {
 console.log(typeof text, text)
    let words =  typeof text === 'string' ? text.split(splitter) : text

    const [word, setWord] = useState(words[0])
  

    useEffect(() => {

        let wordInterval= setTimeout(() => {
           
            if (index <=  words.length ) {
            
              setWord(words[index])
              index++
            } else {
               
               if(loop){
                index = 1;
                   setWord(words[0])
               }else{
                    clearInterval(wordInterval);
               }
            }
            return () =>  { if(wordInterval) {clearInterval(wordInterval)}};
        }, speed)
    
    }, [word])

    console.log(word)
    return (
        <div className="reader">
            <div className="word"> {word}</div>   
        </div>
    )
}

export default Reader
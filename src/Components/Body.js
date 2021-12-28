import React from 'react'
import Section from './Section.js'
function Body({movies,shows}) {
    const titles=['Popular','Top Rated', 'Action', 'Comedy', 'Documentaries']
    return (
        <>
        {movies &&  
            titles.map(title=>
            <Section
            request={title}
            movies
            />)
            }
           
            {/* <Section
            title='Crime'
            request='Crime'
            />
            <Section
            title='Drama'
            request='Drama'
            /> */}
               
        

        {shows && 
            titles.map(title=>
            <Section
            request={title}
            shows
            />)}
            
    
            {/* <Section
            title='Crime'
            request='Crime'
            />
            <Section
            title='Drama'
            request='Drama'
            /> */}
            
        </>
        
    )
}

export default Body

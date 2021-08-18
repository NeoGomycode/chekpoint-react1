import React from 'react'

export const Suggestion = () => {
    const Sugget = [ 
        {
        src: "https://www.youtube.com/embed/SP-0hdg1TYQ" , 
        title: `merci bien hhhhhhh`,
        },
        {
            src: "https://www.youtube.com/embed/qOVAbKKSH10" , 
            title: `merci bien hhhhhhh`,
        },
        {
            src: "https://www.youtube.com/embed/I8cwW_BywdA" ,
            title: `merci bien hhhhhhh`,
        },
        {
            src: "https://www.youtube.com/embed/7KIEvEODCI4" ,
            title: `merci bien hhhhhhh`,
        },
        {
            src: "https://www.youtube.com/embed/7AjRcz_bc-s" ,
            title: `merci bien hhhhhhh`,
        },
    ];

    return (
        <div>
            {Sugget.map((el)=>
             <div>
             <iframe 
            width="100%" 
            height="150" 
            src={el.src} 
            title="gafsiano dito"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>{el.title}</p>
             </div>   
            
             )
             }
            

        </div>
    )
}

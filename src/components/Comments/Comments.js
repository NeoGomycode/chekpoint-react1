import React from 'react'

const Comments = () => {
    const Comment = [
        {
            id: 1 ,
            name: "Ahmed",
            email: "neoMax@yahoo.fr",
            body: "ahla ca va bien ",
        },
        {
            id: 2 ,
            name: "bedda",
            email: "tabbesi@yahoo.fr",
            body: "akeek haala maaak hiiiii   hello  Big Boss Big Boss Big Boss     ......  $$$$$ $$$ $$$     ...... Big Boss Big Boss ",
        },
        {
            id: 3 ,
            name: "neo",
            email: "fullstack@yahoo.fr",
            body: "nice job king Big Boss  Big Boss Big Boss Big Boss Big ... .... $$$$ $$ $$$$$$$ Boss Big Boss Big Boss Big Boss",
        },
        {
            id: 4 ,
            name: "Damdoum",
            email: "neoMax@yahoo.fr",
            body: "yes papa You are the Best King King King King King $$$$$$$****$$$$$$$$$$  King King King King King King ",
        },
        {
            id: 5 ,
            name: "Mamati",
            email: "goforest@yahoo.fr",
            body: "jaime bien que tu gagne",
        },
    ];
    return (
        <div>
        {
            Comment.map((Commentaire)=>
            <div>
            <h5>{Commentaire.name}</h5>
            <h6>{Commentaire.email}</h6>
            <p>{Commentaire.body} </p>
            </div>
            
            )
        }         
        </div>
    )
}

export default Comments

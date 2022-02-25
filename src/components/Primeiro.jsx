import React from 'react'

/*
export default () => 
    // Function arrow
    <>
        <h2>Olá tudo ok?</h2>
        <h3>Exemplo de um componente React.</h3>
    </>
*/

function Primeiro() {
    return (
        //Não dá para retornar dois elementos por isso o div <> e o react.fragment
        <React.Fragment>
            <h2>Olá tudo ok?</h2>
            <h3>Exemplo de um componente React.</h3>
        </React.Fragment>
    )
}

export default Primeiro
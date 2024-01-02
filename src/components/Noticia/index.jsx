'use client'

const Noticia = (props) => {
    return(
        <div>
            <div>{props.noticia.titulo}</div>

            <img src={props.noticia.img} alt="noticia"></img>
            <div dangerouslySetInnerHTML={{__html: props.noticia.texto}} />
        </div>
    )
}
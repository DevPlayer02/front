'use client'

import CardNoticia from "../CardNoticia";

const GridNoticia = ({ noticias }) => {
    return (
        <div>
            {noticias.map(noticia => (
                <CardNoticia key={noticia.id} noticia={noticia} />
            ))}
        </div>
    )
}

export default GridNoticia
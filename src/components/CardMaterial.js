import React from "react";

function CardMaterial({altText, material, clickButton, labelButton, clickImage }) {
const imageStyle = {with : '200px',
height : '200px'
}

    return <>
        <div className="card">
            
            <div className="card-body">
            <img src={material.urlImage} className="card-img-top" alt={altText ? altText : '...'} style={imageStyle} onClick={clickImage}/>
                <h5 className="card-title">{material?.descricao}</h5>
                <p className="card-text">
                    {material?.preco}
                </p>
                <br></br>
                <br></br>
                <button className="btn btn-primary" onClick={(e) => {e.stopPropagation(); return clickButton()}}>{labelButton}</button>
            </div>
        </div>
    </>;
}

export default CardMaterial;
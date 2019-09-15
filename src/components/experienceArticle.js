import React from 'react'

const article = ({name, bullet_points, timeframe, url, logo_url}) => {
    return (
        <article>
            <div className="inner">
                <h4 style={{marginBottom: '0px'}}>
                    <a
                    rel="noopener noreferrer"
                    target="blank"
                    href={url}
                    >
                    <img height='80px' width='80px' src={logo_url} alt="company logo" />
                    </a>
                    {name}
                </h4>
                <p style={{'fontSize': '12px'}}>{timeframe}</p>
                <ul>
                    {bullet_points.map(el => <li>{el}</li>)}
                </ul>
                </div>
        </article>
    )
}

export default article
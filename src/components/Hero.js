import "./HeroStyles.css"

function Hero (props) {
    return (
        <>
            <div className={props.cName}>
                <img alt="HerpImg" src={props.heroImg}/>
            </div>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url1} className={props.btnClass}>
                    <i className="fa-brands fa-instagram"></i>
                    {props.buttonText}
                </a>

            </div>
        </>
    )
}

export default Hero;
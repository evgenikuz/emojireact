import './card.css'

export const Card = ({ id, symbol, title, keywords }) => {
	return (
        <div className="card__card" id={id}>
            <p className="card__emoji">{symbol}</p>
            <h2 className="card__name">{title}</h2>
            <h3 className="card__keywords">{keywords}</h3>
        </div>
)
}
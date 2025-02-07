import './BotCard.scss';

const BotCard = ({ bot, selectedRange, onSelect }) => {
	const selectedValue = bot[selectedRange];
	const botsName = [
		{ name: 'yellow_bot', color: 'yellow', label: 'Megabot' },
		{ name: 'white_bot', color: 'white', label: 'Place bot here' },
		{ name: 'green_bot', color: 'green', label: 'Defence' },
		{ name: 'red_bot', color: 'red', label: 'Attack' },
		{ name: 'blue_bot', color: 'blue', label: 'Balance' },
		{ name: 'orange_bot', color: 'orange', label: 'Attack' },
	];

	const botName = botsName.find(b => b.name === bot.name);
	const trendClass = selectedValue < 0 ? 'red' : 'green';

	return (
		<div className={`bot-card`} onClick={() => onSelect(bot)}>
			<img className='bot-card__image' src={`${bot.name}.png`} alt='' />

			<h3
				className={`bot-card__title ${
					botName.color === 'white' ? 'white' : null
				}`}
			>
				{botName ? botName.label.toUpperCase() : 'UNKNOWN'}
			</h3>

			{botName.color === 'white' ? null : (
				<p className={`bot-card__percent ${trendClass}`}>
					{trendClass === 'green'
						? `+${bot[selectedRange]}`
						: bot[selectedRange]}
					%
				</p>
			)}
		</div>
	);
};

export default BotCard;

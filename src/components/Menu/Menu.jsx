import './Menu.scss';

const Menu = () => {
	const menuItems = [
		{ id: 'dashboard', icon: 'dashboard', label: 'Dashboard', active: true },
		{ id: 'megabot', icon: 'megabot', label: 'Megabot' },
		{ id: 'bot-market', icon: 'market', label: 'Bot market' },
		{ id: 'coin-prices', icon: 'coin', label: 'Coin prices' },
		{ id: 'profile', icon: 'profile', label: 'Profile', badge: 3 },
	];

	return (
		<nav className='sidebar'>
			<ul className='sidebar__list'>
				{menuItems.map(({ id, icon, label, active, badge }) => (
					<li
						key={id}
						className={`sidebar__item ${active ? 'sidebar__item--active' : ''}`}
					>
						<button className='sidebar__button'>
							<span className={`sidebar__icon sidebar__icon--${icon}`}></span>
							<span className='sidebar__text'>{label}</span>
							{badge && <span className='sidebar__badge'>{badge}</span>}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default Menu;

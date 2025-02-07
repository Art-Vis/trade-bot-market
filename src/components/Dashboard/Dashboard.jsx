import { useState, useEffect, useMemo } from 'react';
import TimeRangeSelector from '../TimeRangeSelector/TimeRangeSelector';
import BotCard from '../BotCard/BotCard';
import Graph from '../Graph/Graph';
import botsData from '../../data/data.min.json';
import './Dashboard.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiReload } from 'react-icons/tfi';
import Menu from '../Menu/Menu';
import Coin from '/coin.png';

const Dashboard = () => {
	const [selectedRange, setSelectedRange] = useState('all_time');
	const [bots, setBots] = useState(botsData.bots);
	const [selectedBot, setSelectedBot] = useState(bots[0]);

	const order = [
		'orange_bot',
		'white_bot',
		'blue_bot',
		'green_bot',
		'yellow_bot',
		'red_bot',
	];

	const sortedBots = useMemo(() => {
		return [...bots].sort(
			(a, b) => order.indexOf(a.name) - order.indexOf(b.name)
		);
	}, [bots]);

	useEffect(() => {
		const savedData = localStorage.getItem('botsData');
		if (savedData) {
			setBots(JSON.parse(savedData));
		} else {
			localStorage.setItem('botsData', JSON.stringify(bots));
		}
	}, []);

	return (
		<div className='container'>
			<div className='dashboard'>
				<header className='header'>
					<div className='header-container'>
						<button className='header__button'>
							<RxHamburgerMenu />
						</button>
						<h1 className='header__title'>Dashboard</h1>
						<button className='header__button'>
							<TfiReload />
						</button>
					</div>
				</header>
				<main className='main'>
					<div className='main-container'>
						<div className='trading-info'>
							<p className='trading-info__capital'>
								Trading Capital
								<span>
									{botsData.trading_capital}
									{botsData.trading_capital_currency.toUpperCase()}
								</span>
							</p>
							<div className='trading-info__wrap'>
								<p>
									Balance:
									<span>
										{botsData.balance} <img src={Coin} alt='coin' />
									</span>
								</p>
								<p>
									On Hold:
									<span>
										{botsData.on_hold} <img src={Coin} alt='coin' />
									</span>
								</p>
							</div>
						</div>
					</div>
				</main>
				<section className='graph'>
					<div className='graph-container'>
						<Graph selectedBot={selectedBot} selectedRange={selectedRange} />
					</div>
				</section>
				<section className='bots bots-container'>
					<ul className='bots-list'>
						{sortedBots.map((bot, index) => (
							<BotCard
								key={index}
								bot={bot}
								selectedRange={selectedRange}
								onSelect={setSelectedBot}
							/>
						))}
					</ul>
				</section>
				<section className='time-range'>
					<div className='time-range-container'>
						<TimeRangeSelector
							selectedRange={selectedRange}
							onRangeChange={setSelectedRange}
						/>
					</div>
				</section>
				<footer className='footer'>
					<div className=' footer-container'>
						<Menu />
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Dashboard;

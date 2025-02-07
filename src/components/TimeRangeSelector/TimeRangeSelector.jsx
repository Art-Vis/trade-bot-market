import './TimeRangeSelector.scss';

const TimeRangeSelector = ({ selectedRange, onRangeChange }) => {
	const ranges = [
		{ label: '24h', value: '24h' },
		{ label: '7 days', value: '7d' },
		{ label: '30 days', value: '30d' },
		{ label: 'All time', value: 'all_time' },
	];

	return (
		<div className='time-range'>
			<p className='time-range__title'>Time Range: </p>
			{ranges.map(range => (
				<button
					key={range.value}
					className={
						selectedRange === range.value
							? 'time-range__btn active'
							: 'time-range__btn'
					}
					onClick={() => onRangeChange(range.value)}
				>
					{range.label}
				</button>
			))}
		</div>
	);
};

export default TimeRangeSelector;

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { format, addDays, subDays } from 'date-fns';
import './Graph.scss';

const Graph = ({ selectedBot, selectedRange }) => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (chartRef.current) {
			chartRef.current.destroy();
		}

		const ctx = document.getElementById('botChart');
		if (!ctx) return;

		const currentDate = new Date();
		const labels = [
			format(subDays(currentDate, 2), 'dd.MM'),
			format(subDays(currentDate, 1), 'dd.MM'),
			format(currentDate, 'dd.MM'),
			format(addDays(currentDate, 1), 'dd.MM'),
			format(addDays(currentDate, 2), 'dd.MM'),
		];

		const data =
			selectedBot[selectedRange] !== undefined ? selectedBot[selectedRange] : 0;

		const dataValues = [1.25, 1.7, 5, 3.2, 4.1];
		dataValues[2] = data;

		chartRef.current = new Chart(ctx, {
			type: 'line',
			data: {
				labels,
				datasets: [
					{
						label: selectedRange,
						data: dataValues,
						borderColor: 'rgba(40, 108, 235, 0.5)',
						backgroundColor: 'rgba(40, 108, 235, 0.1)',
						fill: true,
						pointRadius: 5,
						pointBackgroundColor: 'rgba(40, 108, 235, 0.7)',
						tension: 0.4,
					},
				],
			},
			options: {
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
				scales: {
					y: {
						display: false,
					},
					x: {
						ticks: {
							autoSkip: true,
						},
					},
				},
			},
		});
	}, [selectedBot, selectedRange]);

	return <canvas id='botChart'></canvas>;
};

export default Graph;

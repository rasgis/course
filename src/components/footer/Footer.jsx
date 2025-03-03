import { useEffect, useState } from 'react';
import style from './Footer.module.css';

export const Footer = () => {
	const [city, setCity] = useState('');
	const [temp, setTemp] = useState('');
	const [weather, setWeather] = useState('');
	const [currentTime, setCurrentTime] = useState(new Date());
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Yessentuki&units=metric&lang=ru&appid=df89244c7d25e01ef07fc0f9f1715a8d',
		)
			.then((data) => data.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemp(Math.round(main.temp));
				setWeather(weather[0].description);
			})
			.finally(() => setLoading(false));
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<div className={style.leftContainer}>
					<div className="text-lg font-bold">Блог веб-разработчика</div>
					<div className="text-sm">rasgis@yandex.ru</div>
				</div>
				<div>
					<div className="text-sm">Ессентуки</div>
					<div className="text-sm">{new Date().getFullYear()} год</div>
				</div>
				<div className={`${style.rightContainer} w-[200px]`}>
					<div className="h-16 flex flex-col justify-center">
						<div className="text-2xl font-medium">
							{city || 'Загрузка...'}
						</div>
						<div className="h-8 flex items-center">
							{loading ? (
								<div
									className={style.loader}
									role="status"
								>
									<span className="sr-only">Загрузка...</span>
								</div>
							) : (
								<div>
									{currentTime.toLocaleString('ru', {
										day: '2-digit',
										month: '2-digit',
										hour: '2-digit',
										minute: '2-digit',
										second: '2-digit',
									})}
								</div>
							)}
						</div>
					</div>
					<div className="text-base font-medium">
						{temp} градусов, {weather}
					</div>
				</div>
			</div>
		</footer>
	);
};

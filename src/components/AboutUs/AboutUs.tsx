import './AboutUs.scss';

const AboutUs = () => (
	<div className='AboutUs'>
		<h2 className='AboutUs-Title'>О нас</h2>
		<div className='AboutUs-Content'>
			<p className='AboutUs-Paragraph'>
				Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей
				заказывают жд билеты через интернет.
			</p>
			<p className='AboutUs-Paragraph'>
				Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о
				преимуществах заказа через интернет.
			</p>
			<p className='AboutUs-Paragraph AboutUs-Paragraph_type_bold'>
				Покупать жд билеты дешево можно за 90 суток до отправления поезда.
				<br /> Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
			</p>
		</div>
	</div>
);

export default AboutUs;

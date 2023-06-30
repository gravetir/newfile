import React from 'react'
import Slider from '../../Images/run_shoes.png'
import styles from './Main.module.css'
import Rectangle3 from '../Rectangle3/Rectangle3'
import Drip from '../Drip/Drip'
import Arrow from '../Arrow/Arrow'
import Man from '../Man/Man'
import Woman from '../Woman/Woman'
import Shirt from '../Shirt/Shirt'
import Woman2 from '../Woman2/Woman2'

const Main = () => {
	return (
		<div>
			<main>
				<div className={styles.main__nav}>
					<div className={styles.wrapper}>
						<div className={styles.main__list}>
							<div className={styles.main__skidki}>
								<h3 className={styles.main__center1}> Зимняя распродажа </h3>
								<h3 className={styles.main__center}> Скидка до 90% </h3>
								<button className={styles.button__item}>Смотреть модели</button>
							</div>
							<div className={styles.run__shose}>
								<div>
									<img src={Slider} alt='slider' className={styles.shose1} />
								</div>
								<div className={styles.main__price}>
									<div>
										<del className={styles.main__price2}> 9900₽ </del>
									</div>
									<h2 className={styles.main__price1}> 1990₽ </h2>
								</div>
							</div>
						</div>
						<div className={styles.main__skidkirec}>
							<div className={styles.ypravlenie__rec1}>
								<Rectangle3 />
							</div>
							<div className={styles.ypravlenie__rec2}>
								<Drip />
							</div>
							<div className={styles.ypravlenie__rec3}>
								<Rectangle3 />
							</div>
							<div className={styles.ypravlenie__rec4}>
								<Rectangle3 />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.main__end}>
					<div className={styles.wrapper}>
						<div className={styles.main__end1}>
							БЕСПЛАТНАЯ ДОСТАВКА от 3000₽
						</div>
						<div className={styles.main__end2}>
							Сделайте заказ и получите подарок!
						</div>
					</div>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.doublemain__rec}>
						<div className={styles.main__rec}>
							<div className={styles.txtbutton__main}>
								<div className={styles.main__txt}>
									<span>Мужская</span> коллекция
								</div>
								<div className={styles.main__txt1}>Обувь,полуверы,костюмы</div>
								<button className={styles.main__arrow}>
									<Arrow />
								</button>
							</div>
							<div className={styles.man__kartinka}>
								<Man />
							</div>
						</div>
						<div className={styles.main__rec}>
							<div className={styles.txtbutton__main}>
								<div className={styles.main__txt}>Женская коллекция</div>
								<div className={styles.main__txt1}>Обувь,полуверы,костюмы</div>
								<button className={styles.main__arrow}>
									<Arrow />
								</button>
							</div>
							<div className={styles.man__kartinka}>
								<Woman />
							</div>
						</div>
					</div>
					<div className={styles.main__card}>
						<Shirt />
						<Shirt />
						<Shirt />
						<Shirt />
						<Shirt />
						<Shirt />
						<Shirt />
						<Shirt />
					</div>
					<h2 className={styles.main__catalog}> Новые модели </h2>
					<div className={styles.card__woman}>
						<Woman2 />
						<Woman2 />
						<Woman2 />
						<Woman2 />
					</div>
					<div className={styles.ypravlenie__button}>
						<button className={styles.card__button1}>
							<div className={styles.card__txt}>Все модели</div>
							<Arrow />
						</button>
					</div>
				</div>
				<div className={styles.secondmain__end}>
					<div className={styles.wrapper}>
						<div className={styles.second__txt}>ПОЛУЧАЙТЕ СКИДКИ И ПОДАРКИ</div>
						<input
							className={styles.main__email}
							placeholder='Ваш e-mail'
							type='email'
						/>
						<button className={styles.second__button}>ПОДПИСАТЬСЯ</button>
					</div>
				</div>
				<h2 className={styles.main__catalog}> Скидки до 90% </h2>
				<div className={styles.wrapper}>
					<div className={styles.card__woman1}>
						<Woman2 />
						<Woman2 />
						<Woman2 />
						<Woman2 />
					</div>
					<div className={styles.ypravlenie__button}>
						<button className={styles.card__button1}>
							<div className={styles.card__txt}>Все модели</div>
							<Arrow />
						</button>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Main

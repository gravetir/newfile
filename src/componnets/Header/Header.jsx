import React from 'react'
import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import Polygon from '../Polygon/Polygon'
import Basket from '../Basket/Basket'

const Header = () => {
	return (
		<header>
			<div className={styles.wrapper}>
				<nav className={styles.header__nav}>
					<ul className={styles.header__list}>
						<li className={styles.header__ypravlenie}>
							<div className={styles.header__item}>Для мужчин</div>
							<div className={styles.header__kartinka}>
								<Polygon />
							</div>
						</li>
						<li className={styles.header__ypravlenie}>
							<div className={styles.header__item}>Для женщин</div>
							<div className={styles.header__kartinka}>
								<Polygon />
							</div>
						</li>
						<li className={styles.header__ypravlenie}>
							<div className={styles.header__item}>Для детей</div>
							<div className={styles.header__kartinka}>
								<Polygon />
							</div>
						</li>
						<li className={`${styles.header__ypravlenie1} ${styles.header__ypravlenie}`}>
							<div className={styles.ypravlenie__zagalovok}>
								<Logo />
								<h1 className={styles.header__title}>THE LOOP</h1>
							</div>
						</li>
						<li className={styles.header__ypravlenie}>
							Оплата
						</li>
						<li className={styles.header__ypravlenie}>
							Доставка
						</li>
						<li className={`${styles.header__basket} ${styles.header__ypravlenie}`}>
							<Basket />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header

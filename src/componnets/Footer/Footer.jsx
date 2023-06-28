import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'
import { SlSocialVkontakte } from 'react-icons/sl'
import Logoend from '../Logoend/Logoend'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.contiener}>
			<footer className={styles.footer}>
				<div className={styles.wrapper}>
					<div className={styles.zagolovok__main}>
						<div className={styles.ypravlenie__kartinka}>
							<Logoend />
							<div className={styles.zagolovok__end}>THE LOOP</div>
						</div>
						<div className={styles.zagolovok__txt}>
							Lorem ipsum dolor sit amet,
						</div>
						<div className={styles.zagolovok__txt1}>
							consectetur adipiscing elit.
						</div>
						<div className={styles.zagolovok__txt2}>
							Nulla faucibus egestas elit, at
						</div>
						<div className={styles.zagolovok__txt3}>
							eleifend elit ornare ut.
						</div>
					</div>
					<ul className={styles.ypravlenie__spisok1}>
						<div className={styles.kolonka1__txt}>основные ссылки</div>
						<div className={styles.kolonka1__txt1}>О компании</div>
						<div className={styles.kolonka1__txt1}>Каталог</div>
						<div className={styles.kolonka1__txt1}>Доставка</div>
						<div className={styles.kolonka1__txt1}>Оплата</div>
					</ul>
					<ul className={styles.ypravlenie__spisok1}>
						<div className={styles.kolonka1__txt}>категории</div>
						<div className={styles.kolonka1__txt1}>Мужская одежда</div>
						<div className={styles.kolonka1__txt1}>Женская одежда</div>
						<div className={styles.kolonka1__txt1}>Детская одежда</div>
						<div className={styles.kolonka1__txt1}>Для животных</div>
					</ul>
					<ul className={styles.ypravlenie__spisok1}>
						<div className={styles.kolonka1__txt}>полезные ссылки</div>
						<div className={styles.kolonka1__txt1}>Таблица размеров</div>
						<div className={styles.kolonka1__txt1}>Блог о моде</div>
						<div className={styles.kolonka1__txt1}>Наша миссия</div>
					</ul>
					<ul className={styles.ypravlenie__spisok1}>
						<div className={styles.kolonka4__txt}>соц сети</div>
						<div className={styles.kolonka4__txt1}>
							<SlSocialVkontakte />
							<div className={styles.kolonka__icons}>VK.com</div>
						</div>
						<div className={styles.kolonka4__txt1}>
							<ImFacebook2 />
							<div className={styles.kolonka__icons}>Facebook</div>
						</div>
						<div className={styles.kolonka4__txt1}>
							<BsInstagram />
							<div className={styles.kolonka__icons}>Instagram</div>
						</div>
					</ul>
				</div>
			</footer>
			<div className={styles.wrapper}>
				<div className={styles.txt__end}>
					<div className={styles.txt__end1}>
						Copyright © 2019. Все права защищены
					</div>
					<div className={styles.txt__end2}>Политика приватности</div>
				</div>
			</div>
		</div>
	)
}

export default Footer

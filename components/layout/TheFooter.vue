<template>
	<div class="footer">
		<div class="container footer__inner">
			<div class="footer__column footer__column--logo">
				<Logo :variant="logoTypes.BIG" />
			</div>

			<div class="footer__column footer__column--main-nav">
				<nav>
					<ul class="footer__nav">
						<li
							v-for="item in navItems"
							:key="item.title"
							class="footer__nav-item">
							<a
								:href="item.url"
								class="footer__nav-link">{{ item.title }}</a>
						</li>
					</ul>
				</nav>
			</div>

			<div class="footer__column footer__column--nav">
				<nav>
					<ul class="footer__nav">
						<li
							v-for="item in addNavItems"
							:key="item.title"
							class="footer__nav-item">
							<a
								:href="item.url"
								class="footer__nav-link simple">{{ item.title }}</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="footer__column footer__column--privacy">
				<a
					href="#"
					class="footer__nav-link simple footer__privacy-link">Конфиденциальность и <br>безопасность</a>
				<p class="footer__copyright">
					{{ copyright }}
				</p>
			</div>
			<div class="footer__column footer__column--contacts">
				<div class="footer__contact">
					<PhoneLink :big="true" />

					<address
						class="footer__address"
						v-html="address" />
				</div>

				<SocialList class="footer__social" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import Logo from '~/components/Logo.vue';
import PhoneLink from '~/components/PhoneLink.vue';
import SocialList from '~/components/SocialList.vue';
import { LogoTypes } from '~/enums';
import { NavigationItem } from '~/interfaces';

export default Vue.extend({
	name: 'TheFooter',
	components: { SocialList, PhoneLink, Logo },
	data() {
		return {
			/* eslint-disable max-len */
			logoTypes: LogoTypes,
			copyright: '© «MIHAYLOVSKY», 2012 - 2021',
			address: '191011, г. Санкт-Петербург, Невский проспект, д. 30/канал Грибоедова, д. 16 (Бизнес-центр "Невский 30")',
			navItems: [
				{
					title: 'Главная страница',
					url: '/',
				},
				{
					title: 'Обо мне',
					url: '/',
				},
				{
					title: 'Юридические услуги',
					url: '/',
				},
				{
					title: 'Успешные дела/процессы',
					url: '/',
				},
				{
					title: 'Про боно',
					url: '/',
				},
				{
					title: 'Блог',
					url: '/',
				},
				{
					title: 'Контакты',
					url: '/',
				},
			] as NavigationItem[],
			addNavItems: [
				{
					title: 'Сфера денежных обязательств',
					url: '/',
				},
				{
					title: 'Сфера недвижимости',
					url: '/',
				},
				{
					title: 'Сфера оказания услуг',
					url: '/',
				},
				{
					title: 'Сфера семейных правоотношений',
					url: '/',
				},
				{
					title: 'Сфера защиты прав автовладельцев',
					url: '/',
				},
				{
					title: 'Сфера уголовных и иных дел',
					url: '/',
				},
			] as NavigationItem[],
		};
	},
});
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/font";
@import "assets/styles/mixins/flex";

.footer {
	padding: 30px 0;
	background-color: #3F4868;

	&__inner {
		flex-direction: column;

		@include flex-v-center;

		@include mq(large-tablet) {
			flex-direction: row;
			align-items: initial;
			justify-content: space-between;
		}
	}

	&__nav-link {
		display: inline-flex;
		padding: 4px 0;
		text-transform: uppercase;
		color: #A7AEC8;
		transition: color .13s ease-in-out;

		@include font(14, extra-bold);

		&:hover {
			color: var(--white-color);
		}

		&.simple {
			text-transform: initial;
			margin-bottom: 5px;
		}
	}

	&__column {
		&--privacy {
			display: flex;
			flex-direction: column;
			margin-top: 33px;
			text-align: center;
			order: 4;

			@include mq(large-tablet) {
				order: initial;
				text-align: left;
				margin-top: 0;
				justify-content: space-between;
			}
		}

		&--nav,
		&--main-nav {
			display: none;
		}

		&--nav {
			@include mq(1366px) {
				display: flex;
			}
		}

		&--main-nav {
			@include mq(large-tablet) {
				display: flex;
			}
		}

		&--logo {
			margin-bottom: 25px;

			@include mq(large-tablet) {
				margin-bottom: 0;
			}
		}

		&--contacts {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;

			@include mq(large-tablet) {
				align-items: flex-end;
			}
		}
	}

	&__privacy-link {
		@include font(12, medium);
	}

	&__contact {
		flex-direction: column;

		@include flex-v-center;

		@include mq(large-tablet) {
			align-items: flex-end;
		}
	}

	&__copyright {
		margin-bottom: var(--base-indent);
		margin-top: var(--indent-3);
		color: #9298AE;

		@include font(10, regular);

		@include mq(large-tablet) {
			margin-top: 0;
		}
	}

	&__address {
		margin-top: var(--indent-4);
		color: var(--white-color);
		text-align: center;
		font-style: initial;
		max-width: 410px;

		@include font(12, bold, 1.4);

		@include mq(large-tablet) {
			max-width: 230px;
			text-align: right;
		}
	}

	&__social {
		margin-top: var(--indent-4);

		@include mq(large-tablet) {
			margin-top: 0;
		}
	}
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>

<template>
	<InfoSection>
		<div class="career">
			<div class="career__item">
				<SectionTitle
					:self-center="true"
					tag="h3"
					title="Образование" />

				<div class="career__item-text text-content">
					<p>НИУ «Высшая школа экономики», программа профессиональной переподготовки, 2017</p>
					<p>АНО ДПО «Юридический институт «М-Логос», программы повышения квалификации, участие в семинаре, 2017</p>
					<p>ФГБОУ ВО «Российский государственный университет правосудия», аспирантура, 2014</p>
					<p>ФГБОУ ВПО «Российская академия правосудия», высшее образование, 2011</p>
					<p>Юридический колледж при ФГБОУ ВПО «Российская академия правосудия», среднее профессиональное образование, 2007</p>
				</div>
			</div>

			<div class="career__item">
				<SectionTitle
					:self-center="true"
					tag="h3"
					title="Карьера" />
				<div class="career__item-text text-content">
					<p>Управляющий партнер Адвокатского бюро города Москвы "Башилов, Носков и Партнеры", 2019 - н.в.</p>
					<p>Старший преподаватель кафедры гражданского права и процесса и международного частного права, Юридический институт Российского университета дружбы народов (РУДН), 2017 - 2018</p>
					<p>Преподаватель кафедры организации судебной и правоохранительной деятельности, ФГОУ ВО «Российский государственный университет правосудия», 2012 - 2017</p>
					<p>Помощник судьи, Арбитражный суд города Москвы, 2011 - 2012</p>
					<p>Секретарь судебного заседания, Арбитражный суд города Москвы, 2010 - 2011</p>
				</div>
			</div>

			<div class="career__item">
				<SectionTitle
					:self-center="true"
					tag="h3"
					title="Членство" />
				<div class="career__item-text text-content">
					<p>НИУ «Высшая школа экономики», программа профессиональной переподготовки, 2017</p>
					<p>АНО ДПО «Юридический институт «М-Логос», программы повышения квалификации, участие в семинаре, 2017</p>
					<p>ФГБОУ ВО «Российский государственный университет правосудия», аспирантура, 2014</p>
					<p>ФГБОУ ВПО «Российская академия правосудия», высшее образование, 2011</p>
					<p>Юридический колледж при ФГБОУ ВПО «Российская академия правосудия», среднее профессиональное образование, 2007</p>
				</div>
			</div>
		</div>
	</InfoSection>
</template>

<script lang="ts">
import Vue from 'vue';

import InfoSection from '~/components/InfoSection.vue';
import SectionTitle from '~/components/SectionTitle.vue';

export default Vue.extend({
	name: 'CareerSection',
	components: { SectionTitle, InfoSection },
});
</script>

<style lang="scss" scoped>
.career {
	display: flex;
	justify-content: space-between;
	padding: var(--indent-3) 0;

	&__item {
		flex-basis: 33%;
		max-width: 350px;
		text-align: center;
	}

	&__item-text {
		margin-top: var(--indent-5);
	}
}
</style>

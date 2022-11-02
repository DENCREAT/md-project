<template>
	<div class="page page-about-me">
		<InfoSection>
			<p>fdsfjsd jfsjd fds fsdhb</p>
			<div class="quote">
				fbsdf bsdfhj sfvgs
			</div>
		</InfoSection>

		<TextSection title="adfsdsfdfds">
			<ul>
				<li>2323</li>
				<li>23232434</li>
			</ul>
			<div class="quote">
				dsdfksdjfhjsdfhsdiuf sdushf sghg hdsg fsf sdgf sdf
			</div>
			<p>Если вы столкнулись с необходимостью отстаивать свои права в суде по поводу спорного договора, целесообразно начать с обращения к профессиональному юристу, который установит наличие или отсутствие правовых оснований для того, чтобы считать соглашение ничтожным либо же оспоримым (это два варианта, когда договор признаётся недействительным). В качестве оснований для признания сделки таковой выступают:</p>
			<p>Если вы столкнулись сpacka необходимостью отстаивать свои права в суде по поводу спорного договора, целесообразно начать с обращения к профессиональному юристу, который установит наличие или отсутствие правовых оснований для того, чтобы считать соглашение ничтожным либо же оспоримым (это два варианта, когда договор признаётся недействительным). В качестве оснований для признания сделки таковой выступают:</p>
		</TextSection>

		<QuoteSection text="dsfdsfdsf sdf vg dfgdh fgdjsf gdfh gksdgdf lgfdg liusdflgjdfgdfgkdfgiufh df dfsgdjf" />

		<CertificatesSection />

		<AffairsSection />
		<LeadGenerationSection />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import AffairsSection from '~/components/AffairsSection.vue';
import CertificatesSection from '~/components/CertificatesSection.vue';
import InfoSection from '~/components/InfoSection.vue';
import LeadGenerationSection from '~/components/LeadGenerationSection.vue';
import QuoteSection from '~/components/QuoteSection.vue';
import TextSection from '~/components/TextSection.vue';

export default Vue.extend({
	name: 'AboutUs',
	components: { QuoteSection, TextSection, InfoSection, AffairsSection, LeadGenerationSection, CertificatesSection },
});
</script>

<template>
	<div class="affair-item">
		<div class="affair-item__content" :style="{ ...bgStyles }">
			<div class="affair-item__title">
				{{ data.title }}
			</div>
		</div>
		<div class="affair-item__footer">
			<a href="/" class="affair-item__link">Подробнее</a>
		</div>
	</div>
</template>


<script>
export default {
	name: 'AffairItem',
	props: {
		data: {
			type: Object,
			default: () =>{}
		}
	},
	computed: {
		bgStyles() {
			return {
				'background-image': `url(${this.data.imgUrl})`,
				'background-size': 'cover',
				'background-repeat': 'no-repeat'
			};
		}
	}
};
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";
@import "assets/styles/mixins/mq";
@import "assets/styles/mixins/size";

.affair-item {
  @extend %flex;
  padding: 9px 9px 0 9px;
  flex-direction: column;
  height: 455px;
  background-color: var(--primary-color);
  color: var(--white-color);

  &__title {
    position: relative;
    z-index: 1;
    padding: 20px 20px 60px 20px;
    font-size: 20px;
    font-weight: 800;
    line-height: 25px;
  }

  &__content {
    @extend %flex-h-center;
    align-items: flex-end;
    text-align: center;
    flex-grow: 1;
  }

  &__footer {
    @extend %flex-center;
    height: 70px;
  }

  &__link {
    font-size: 16px;
    font-weight: 800;
    line-height: 20px;
    text-transform: uppercase;
  }
}
</style>

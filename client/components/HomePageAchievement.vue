<template>
	<div class="achievement">
		<div class="achievement__header">
			{{ achievement.count }} <span class="small">{{ achievement.comment }}</span>
		</div>
		<div class="achievement__footer">
			{{ achievement.text }}
		</div>
	</div>
</template>
<script>

export default {
	name: 'HomePageAchievement',
	props: {
		achievement: {
			type: Object,
			default: () => {}
		}
	}
};
</script>

<style lang="scss" scoped>
@import "assets/styles/placeholders/flex";

.achievement {
  &__header {
    @extend %flex;
    align-items: flex-end;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--white-color);
    color: #878A97;
    font-size: 48px;
    font-weight: 900;

    .small {
      font-size: 14px;
      margin-left: 12px;
      margin-bottom: 5px;
    }
  }

  &__footer {
    font-size: 13px;
    color: var(--white-color);
    font-weight: 700;
    line-height: 16px;
    text-transform: uppercase;
  }
}
</style>

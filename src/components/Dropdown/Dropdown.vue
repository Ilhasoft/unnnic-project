<template>
    <div class="unnnic-dropdown" @click="active = !active">
        <div class="unnnic-dropdown__trigger">
            <slot name="trigger" />
            <div :class="[
            'unnnic-dropdown__content',
            active ? '' : 'unnnic-dropdown__content--hidden',
            `unnnic-dropdown__content__position-${position}` ]">
            <slot />
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'unnnicDropdown',
  props: {
    position: {
      type: String,
      default: 'bottom-left',
      validator(value) {
        return ['top-left', 'bottom-left', 'bottom-left', 'bottom-right'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/unnnic.scss';
  .unnnic-dropdown {
    &__trigger {
      position: relative;
      display: inline-block;
    }

    &__content {
        background-color: $unnnic-color-neutral-snow;
        box-shadow: $unnnic-shadow-level-near;
        border-radius: $unnnic-border-radius-sm;
        position: absolute;
        display: flex;
        flex-direction: column;
        padding: $unnnic-squish-xs;
      &--hidden {
        display: none !important;
      }
      &__position {
          &-top-left {
            bottom: 100%;
            right: 1rem;
            margin-bottom: $unnnic-spacing-stack-xs;
          }
          &-top-right {
            bottom: 100%;
            left: 1rem;
            margin-bottom: $unnnic-inline-xs;
          }
          &-bottom-left {
            margin-top: $unnnic-spacing-stack-xs;
            top: 100%;
            right: 0;
          }
          &-bottom-right {
            margin-top: $unnnic-inline-xs;
            top: 100%;
            left: 1rem;
          }
      }
    }
  }
</style>

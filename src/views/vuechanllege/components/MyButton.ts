import { defineComponent, h } from 'vue';
export default defineComponent({
  name: 'MyButton',
  props: {
    disabled: {
      type: Boolean,
      default: true
    }
  },
  emits: ['custom-click'],
  setup(props, ctx) {
    return () =>
      h(
        'button',
        {
          disabled: props.disabled,
          onClick: () => ctx.emit('custom-click')
        },
        ctx.slots.default?.()
      );
  }
});

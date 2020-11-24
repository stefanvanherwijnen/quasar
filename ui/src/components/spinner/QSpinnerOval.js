import { h, defineComponent } from 'vue'

import mixin from './spinner-mixin.js'

const svg = [
  h('g', {
    transform: 'translate(1 1)',
    'stroke-width': '2',
    fill: 'none',
    'fill-rule': 'evenodd'
  }, [
    h('circle', {
      'stroke-opacity': '.5',
      cx: '18',
      cy: '18',
      r: '18'
    }),
    h('path', {
      d: 'M36 18c0-9.94-8.06-18-18-18'
    }, [
      h('animateTransform', {
        attributeName: 'transform',
        type: 'rotate',
        from: '0 18 18',
        to: '360 18 18',
        dur: '1s',
        repeatCount: 'indefinite'
      })
    ])
  ])
]

export default defineComponent({
  name: 'QSpinnerOval',

  mixins: [mixin],

  render () {
    return h('svg', {
      class: this.classes,
      stroke: 'currentColor',
      width: this.cSize,
      height: this.cSize,
      viewBox: '0 0 38 38',
      xmlns: 'http://www.w3.org/2000/svg'
    }, svg)
  }
})

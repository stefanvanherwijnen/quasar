import { h, defineComponent } from 'vue'

import mixin from './spinner-mixin.js'

const svg = [
  h('g', {
    transform: 'translate(20 50)'
  }, [
    h('rect', {
      x: '-10',
      y: '-30',
      width: ' 20',
      height: '60',
      fill: 'currentColor',
      opacity: '0.6'
    }, [
      h('animateTransform', {
        attributeName: 'transform',
        type: 'scale',
        from: '2',
        to: '1',
        begin: '0s',
        repeatCount: 'indefinite',
        dur: '1s',
        calcMode: 'spline',
        keySplines: '0.1 0.9 0.4 1',
        keyTimes: '0;1',
        values: '2;1'
      })
    ])
  ]),
  h('g', {
    transform: 'translate(50 50)'
  }, [
    h('rect', {
      x: '-10',
      y: '-30',
      width: ' 20',
      height: '60',
      fill: 'currentColor',
      opacity: '0.8'
    }, [
      h('animateTransform', {
        attributeName: 'transform',
        type: 'scale',
        from: '2',
        to: '1',
        begin: '0.1s',
        repeatCount: 'indefinite',
        dur: '1s',
        calcMode: 'spline',
        keySplines: '0.1 0.9 0.4 1',
        keyTimes: '0;1',
        values: '2;1'
      })
    ])
  ]),
  h('g', {
    transform: 'translate(80 50)'
  }, [
    h('rect', {
      x: '-10',
      y: '-30',
      width: ' 20',
      height: '60',
      fill: 'currentColor',
      opacity: '0.9'
    }, [
      h('animateTransform', {
        attributeName: 'transform',
        type: 'scale',
        from: '2',
        to: '1',
        begin: '0.2s',
        repeatCount: 'indefinite',
        dur: '1s',
        calcMode: 'spline',
        keySplines: '0.1 0.9 0.4 1',
        keyTimes: '0;1',
        values: '2;1'
      })
    ])
  ])
]

export default defineComponent({
  name: 'QSpinnerFacebook',

  mixins: [mixin],

  render () {
    return h('svg', {
      class: this.classes,
      width: this.cSize,
      height: this.cSize,
      viewBox: '0 0 100 100',
      xmlns: 'http://www.w3.org/2000/svg',
      preserveAspectRatio: 'xMidYMid'
    }, svg)
  }
})

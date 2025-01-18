<template>
  <router-view />
</template>

<script setup>
import { useMeta } from 'quasar'

import getMeta from 'assets/get-meta.js'
import { onMounted } from 'vue'

useMeta({
  title: 'Quasar Framework',
  titleTemplate: title => `${title} | Quasar Framework`,

  meta: getMeta(
    'Quasar Framework - Build high-performance VueJS user interfaces in record time',
    'Developer-oriented, front-end framework with VueJS components for best-in-class high-performance, responsive websites, PWA, SSR, Mobile and Desktop apps, all from the same codebase. Sensible people choose Vue. Productive people choose Quasar. Be both.'
  )
})

/* eslint-disable */
onMounted(async () => {
  // get all unique CSS classes defined in the main document
  const allClasses = Array.from(document.querySelectorAll('*'))
    .map((n) => Array.from(n.classList))
    .reduce((all, a) => (all ? all.concat(a) : a))
    .reduce((all, i) => all.add(i), new Set())

  // load contents of all CSS stylesheets applied to the document
  const loadStyleSheets = Array.from(document.styleSheets).map((s) => {
    if (s.href) {
      return fetch(s.href)
        .then((r) => r.text())
        .catch((e) => {
          console.warn("Coudn't load " + s.href + ' - skipping')
          return ''
        })
    }

    return s.ownerNode.innerText
  })

  function escapeRegExp (str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
  }

  Promise.all(loadStyleSheets).then((s) => {
    const text = s.reduce((all, s) => all + s)

    // get a list of all CSS classes that are not mentioned in the stylesheets
    const undefinedClasses = Array.from(allClasses).filter((c) => {
      const rgx = new RegExp(escapeRegExp('.' + c) + '[^_a-zA-Z0-9-]')

      return !rgx.test(text)
    })

    if (undefinedClasses.length) {
      console.log(
        'List of ' + undefinedClasses.length + ' undefined CSS classes: ',
        undefinedClasses
      )
    }
    else {
      console.log('All CSS classes are defined!')
    }
  })
})
</script>

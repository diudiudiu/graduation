import { tip, kebab } from './lib.ts'
export default {
  props: {
    // the options of BetterScroll
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    _checkDeprecated () {
      const props = this.$options.props
      const componentName = this.$options.name

      Object.entries(props).forEach(([key, prop]) => {
        const deprecated = prop.deprecated

        if (deprecated && this[key] !== undefined) {
          tip(`The property "${kebab(key)}" is deprecated, please use the recommended property "${deprecated.replacedBy}" to replace it. Details could be found in https://didi.github.io/cube-ui/#/en-US/docs/${componentName.substr(5)}#cube-Propsconfiguration-anchor`, componentName)
        }
      })
    }
  },
  mounted () {
    this._checkDeprecated()
  }
}

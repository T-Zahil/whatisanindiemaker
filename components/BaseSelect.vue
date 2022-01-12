<template>
  <div>
    <label class="block text-sm font-medium leading-5 text-gray-600">
      {{ label }} {{ required && !!label ? '*' : '' }}
    </label>
    <select
      ref="select"
      v-model="computedValue"
      v-bind="$attrs"
      class="block w-full px-3 py-2 text-base leading-6 border-gray-300 rounded-md shadow-sm cursor-pointer bg-emerald-300 sm:text-sm sm:leading-5 hover:shadow focus:border-primary focus:outline-none form-select focus:ring-primary"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :selected="selected === option ? 'selected' : null"
        :value="option"
      >
        {{ displayOption(option) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    editionMode: {
      type: Boolean,
      default: true
    },
    value: String,
    label: String,
    options: Array,
    optionsLabel: String,
    translateKey: String,
    required: Boolean
  },

  data () {
    return {
      selected: this.value
    }
  },

  computed: {
    computedValue: {
      get (): any {
        return this.selected
      },
      set (value: any) {
        this.selected = value
        this.$emit('input', value)
      }
    }
  },

  watch: {
    value (value: any) {
      this.selected = value
    }
  },

  methods: {
    displayOption (option: Record<string, any>) {
      return option ? (this.translateKey ? this.$t(`${this.translateKey}.${option}`) : option) : ''
    }
  }
})
</script>

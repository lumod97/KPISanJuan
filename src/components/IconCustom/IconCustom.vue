<template>
    <component :is="iconName" v-bind="iconProps" />
  </template>
  
  <script>
  export default {
    name: 'IconCustom',
    props: {
      icon: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: '1em'
      }
    },
    computed: {
      iconName() {
        return `i-bi-${this.icon}`; // Usar el prefijo adecuado para los íconos
      },
      iconProps() {
        return {
          color: this.color,
          width: this.size,
          height: this.size
        };
      }
    }
  }
  </script>
  
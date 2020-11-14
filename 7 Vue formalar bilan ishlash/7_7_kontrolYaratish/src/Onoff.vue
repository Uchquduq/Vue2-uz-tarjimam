<template>
  <div>
      <div><button
      class="on"
      v-bind:class="{'active':value}"
      @click="onChange(true)"
      >On
      </button>
      
      <button
      class="off"
      v-bind:class="{'active': !value}"
      @click="onChange(false)"
      >Off
      </button>
      </div>
  </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        onChange (newValue) {
            this.$emit('input', newValue)
        }
    }
}
</script>

<style scoped>

    button {
        border: none;
        padding: 5px 15px;
        cursor: pointer;
        margin-right: 20px;
        outline: none;
        transition: color .1s linear;
        border-radius: 2px;
        font-size: 14px;
        font-weight: 550;
    }

    button:active {
        box-shadow: inset 1px 1px 2px rgba(0, 0, 0, .5);
    }

    .on.active {
        background: green;
        color: #ffffff;
    }

    .off.active {
        background: red;
        color: #ffffff;
    }
</style>
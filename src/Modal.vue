<template>
  <div
    v-if = "isShow"
    class = "modal border-4 border-light-blue-500 border-opacity-50 grid grid-cols-1 divide-y divide-light-blue-500">
    <div class = "container">
        <slot name = "modal-header">Modal header</slot>
    </div>
    <div class = "container">
        <slot name = "modal-body">Modal header</slot>
    </div>
    <div class = "container">
        <slot name = "modal-footer">Modal header</slot>
    </div>
  </div>
</template>
<script>
export default {
  name:"Modal",
  data () {
    isShow:false
  },
  method: {
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    }
  }
}
</script>
<style>
.modal {
  width: 80vw;
  height: 70vh;
}

.modal-header {
  padding:1rem;
  height:20%;
}

.modal-body {
  padding:1rem;
  height:60%;
}

.modal-footer {
  padding:1rem;
  height:10%;
}
</style>

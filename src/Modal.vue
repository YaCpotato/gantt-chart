<template>
<div>
  <button v-on:click="isShow = !isShow">
      Toggle
    </button>
    <transition name="fade">
      <div class = "modal-wrapper w-screen h-screen" v-if="isShow">
        <div class = "modal border-gray-200">
          This is Modal
          <button v-on:click="isShow = !isShow">
            Toggle
          </button>
        </div>
      </div>
    </transition>
</div>
</template>
<script>
export default {
  name:"Modal",
  data () {
    return {
      isShow:false
    }
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
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9001;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  background: rgba(100, 100, 100, 0.9);
  text-align: center;
  vertical-align: middle;
}
.modal {
  width: 80%;
  height: 70%;
  background: cornsilk;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

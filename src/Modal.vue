<template>
<div>
  <button v-on:click="isShow = !isShow">
      Toggle
    </button>
    <transition name="fade">
      <div class = "modal-wrapper w-screen h-screen block" v-if="isShow">
        <div class = "modal border-gray-200 block divide-y-4 divide-black divide-opacity-25">
          <div class = "modal-header">
            This is Modal
          </div>
          <div class = "modal-body">
            
          </div>
          <div class = "modal-footer">
            <div class="right-area float-right">
              <button v-on:click="isShow = !isShow">
                Close
              </button>
            </div>
            <div class="left-area float-left">
              
            </div>
          </div>
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
  background: white;
  margin:0 auto;
  margin-top: 3rem;
  padding:2rem;
}

.modal-header {
  padding:1rem;
  height:10%;
}

.modal-body {
  padding:1rem;
  height:80%;
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

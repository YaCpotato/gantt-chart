<template>
  <div class="container">
    <button v-on:click="show" class="button">show!</button>
    <sweet-modal :ref="modal">
      <div class="modal-header">
        <h2>Modal title</h2>
      </div>
      <div class="modal-body">
        <p>you're reading this text in a modal!</p>
        <button v-on:click="hide">閉じる</button>
      </div>  
    </sweet-modal>
  </div>
</template>

<script>
import './store'
import Task from './model/Task'
import  SweetModal from 'sweet-modal-vue'

export default {
  components:{
    SweetModal
  },
  data () {
    return {
      project: {
        'id': null,
        'name': '',
        'day': ''
      },
      tasks:[
        {
          id: 'Task 1',
          name: 'Redesign website',
          start: '2016-12-28',
          end: '2016-12-31',
          progress: 20,
          dependencies: 'Task 2, Task 3',
          summary:"aaaaaaa"
        }
      ],
      gantt: null,
      taskFormShow:false,
      projectFormShow:false,
      showModal: false
    }
  },
    methods: {
      initialize () {
        this.task = Task.query().where('project_id',this.project.id).get()
      },
      show () {
        console.log(this.$refs)
        this.$refs.ref["modal"].open()
      },
      hide () {
        this.$refs.modal.close()
      },
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.gantt-area {
  max-width: 80vw;
  overflow: scroll;
  text-align: center;
}
</style>

<template>
  <div class="container"></div>
</template>

<script>
import './store'
import Task from './model/Task'
import VModal from 'vue-js-modal'

export default {
  components:{
    VModal
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
      this.$modal.show('hello-world');
      },
      hide () {
        this.$modal.hide('hello-world');
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

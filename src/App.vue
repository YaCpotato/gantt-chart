<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="gantt-area">
      <svg id="gantt"></svg>
    </div>
  </div>
</template>

<script>
import Gantt from 'frappe-gantt'
import './store'
import Task from './model/Task'

export default {
  name: 'App',
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
      gantt: null
    }
  },
  mounted () {
    this.gantt = new Gantt("#gantt", this.tasks,{
      on_click (task) {
        console.log(task)
      },
      on_date_change (task, start, end) {
        console.log(task, start, end);
      },
      on_progress_change (task, progress) {
        console.log(task, progress);
      },
      on_view_change (mode) {
        console.log(mode);
      },
      custom_popup_html (task) {
        return `
        <div class="details-container">
          <h5>${task.name}</h5>
          <p>Expected to finish by ${task.end}</p>
          <p>${task.summary}</p>
        </div>
        `;
      }
    }
    );
  },
    methods: {
      initialize () {
        this.task = Task.query().where('project_id',this.project.id).get()
      }
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
  margin-top: 60px;
}

.gantt-area {
  max-width: 80vw;
  overflow: scroll;
  text-align: center;
}
</style>

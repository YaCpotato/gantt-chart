<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <svg id="gantt"></svg>
  </div>
</template>

<script>
import Gantt from "frappe-gantt" 

export default {
  name: 'App',
  data () {
    return {
      tasks:[
        {
	id: 'Task 1',
	name: 'Redesign website',
	start: '2016-12-28',
	end: '2016-12-31',
	progress: 20,
	dependencies: 'Task 2, Task 3'
  }
      ],
      gantt: null
    }
  },
  mounted () {
    this.gantt = new Gantt("#gantt", this.tasks);
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
</style>

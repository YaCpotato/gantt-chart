import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Project from './model/Project'
import Task from './model/Task'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Project)
database.register(Task)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store
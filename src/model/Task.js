import { Model } from '@vuex-orm/core'

export default class Task extends Model {
  static entity = 'tasks'

  static fields () {
    return {
        id: this.uid(),
        project_id :this.attr(null),
        name: this.string(''),
        start: this.string(null),
        end: this.string(false),
        progress: this.attr(0),
        dependencies: this.string('')
    }
  }
}

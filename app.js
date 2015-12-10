 /*Vue.component('tasks', {
   props: [
     'list',
   ],
    template: "#tasks-template",
    computed: {
        remaining: function(){

            var vm = this;


         return this.list.filter(function(task){
                return   vm.isInProgress(task);

            }).length;
        }
    },

    created: function(){
        this.fetchTaskList();
    },

    methods: {
        isCompleted: function(task){

            return task.completed;
        },
        isInProgress: function(task){
            return ! this.isCompleted(task);
        },
        delete: function(task){

            return this.list.$remove(task);

        },
        completed: function(){
            this.list =  this.list.filter(this.isInProgress);
        },

        addTask: function(task){

            var newTask = {body: task, completed: false, editing: false}

            this.list.push(newTask);


        },

        edit: function(task){

            task.editing = true;


        },

        fetchTaskList: function(){

            var vm = this;
            var resource = this.$resource('http://jsonplaceholder.typicode.com/todos/:id')
            resource.get(function(tasks){

               vm.list = tasks;
            });
        }
    }


});
 */


Vue.component('alert', {
   props: ['type'],
   template: '#alert-template',
    data: function(){

        return {
            show: true
        }
    },

      computed: {
        alertClasses: function(){
            var type = this.type;

            return {
                'alert': true,
                'alert-success': type === 'success',
                'alert-error': type === 'alert'
            }

        }
    },
   methods: {

       toggle: function(){

           this.show = !this.show;

       }

   }

});


new Vue({
   el: "#app",
    data: {


    },


    });


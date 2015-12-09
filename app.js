Vue.component('tasks', {
   props: [
     'list'
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
        }
    }


});




new Vue({
   el: "#app",
    data: {

        tasks: [
            {body: "kiss my butt", completed: false},
            {body: "kiss my mbm", completed: false},
            {body: "kidd my butddt", completed: true},
        ],

        otherTasks: [
            {body: 'rick james', completed: false},
            {body: 'diane forney', completed: false},
            {body: 'gerard weatherby', completed: false},
        ]
    },


    });


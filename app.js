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
            {body: "yseyesyesyes", completed: false},
            {body: "sdhddshhs", completed: false},
            {body: "yltgt7yo", completed: true},
        ],

        otherTasks: [
            {body: 'drdudu45', completed: false},
            {body: '43473743', completed: false},
            {body: 'jdjd', completed: false},
        ]
    },


    });


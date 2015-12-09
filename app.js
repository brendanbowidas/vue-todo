Vue.component('tasks', {
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


        }
    }


});




new Vue({
   el: "#app",
    data: {

        tasks: [
            {body: "yseyesyesyes", completed: false, editing: false},
            {body: "sdhddshhs", completed: false, editing: false},
            {body: "yltgt7yo", completed: true, editing: false},
        ],

        otherTasks: [
            {body: 'drdudu45', completed: false, editing: false},
            {body: '43473743', completed: false, editing: false},
            {body: 'jdjd', completed: false, editing: false},
        ]
    },


    });



export default class Task{

    constructor(title, desc, date, priority, completion, project){
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.priority = priority;
        this.completion = completion;
        this.project = project;
    }

    switchCompletion(){
        if(this.completion === 'Not Done'){
            this.completion = 'Done';
        }else{
            this.completion = 'Not Done';
        }
    }

}
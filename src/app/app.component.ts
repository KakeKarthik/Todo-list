import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';
  Tasks:any[] = [];

  addTask(task:string) {
    this.Tasks.push({id:this.Tasks.length+1,name:task});
  }

  removeTask(id:number) {
    this.Tasks= this.Tasks.filter(item=>item.id!==id);
  }
}

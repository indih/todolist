import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todolist';
  close = '\u00D7';
  inputtitle = '';
  lists = [
  {
    'title':'Hit the gym',
    'check': false
  },
  {
    'title':'Pay bills',
    'check':true
  },
  {
    'title':'Meet George',
    'check':false
  },
  {
    'title':'Buy eggs',
    'check':false
  },
  {
    'title':'Read a book',
    'check':false
  },
  {
    'title':'Organize office',
    'check':false
  }];
  addTitle(): void {
    if(this.inputtitle == '')
    {
      alert("You must write something!");
    }
    else
    {
      this.lists.push({'title':this.inputtitle,'check':false});
      this.inputtitle = '';
    }
  }
  completeTitle(index: number): void {
    this.lists[index].check = !this.lists[index].check;
  }
  removeTitle(index: number): void {
    this.lists.splice(index,1);
  }
}

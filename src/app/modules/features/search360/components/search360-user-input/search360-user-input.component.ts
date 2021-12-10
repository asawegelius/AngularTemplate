import { Component, OnInit } from '@angular/core';
import { isEmpty } from '../../../../shared/utils/tool';
import { ISearch360 } from '../../models/search360';
import { Search360Observer } from '../../services/search360-observer';

@Component({
  selector: 'app-search360-user-input',
  templateUrl: './search360-user-input.component.html',
  styleUrls: ['./search360-user-input.component.scss']
})
export class Search360UserInputComponent implements OnInit {

  public search360Form: ISearch360 = { id: '', name: '' };

  constructor(private search360Observer: Search360Observer) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.search360Form.id.trim();
    this.search360Form.name.trim();

    if (!isEmpty(this.search360Form.id) || !isEmpty(this.search360Form.name)) {
      this.search360Observer.onNewSearch360(this.search360Form);
    }
  }
}
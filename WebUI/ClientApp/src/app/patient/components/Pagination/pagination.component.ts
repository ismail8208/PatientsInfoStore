import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalPages?: number;
  @Output() currentPage :EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  counter(): any[] {
    return new Array(this.totalPages);
  }
  increment(i: number)
  {
    return ++i;
  }
  onPageChange(page: number): void {

    this.currentPage.emit(page);
    console.log(`Page changed to ${page}`);
  }
}
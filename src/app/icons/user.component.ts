import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <svg
      class="h-5 w-5 inline"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  `,
  styles: [],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

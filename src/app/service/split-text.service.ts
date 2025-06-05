import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SplitTextService {
  splitText = (ele: any, id: string) => {
    ele.innerHTML = ele.innerHTML
      .split('')
      .map((char: string, index: number) => {
        return `<div id="${id}" style = "${
          char == ' ' ? `width : 20px;` : ''
        }">${char}</div>`;
      })
      .join('');
  };
}

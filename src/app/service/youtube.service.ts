import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class YoutubescriptService {
 
  constructor() { }
 
  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = 'assets/scripts/test.js';
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
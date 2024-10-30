import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguros',
  standalone: true
})
export class DomsegurosPipe implements PipeTransform {

  constructor(private domSanitizer :DomSanitizer){}
  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}

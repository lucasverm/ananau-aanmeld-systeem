import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor, OnInit {
  @Input() errorGevonden;
  onChange: Function;
  public file: File | null = null;
  @Input() blob: Blob;
  public image;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
    this.blob = file;
    this.toonAfbeelding();
  }

  constructor(private sanitizer: DomSanitizer, private host: ElementRef<HTMLInputElement>) {
  }

  toonAfbeelding() {
    let objectURL = URL.createObjectURL(this.blob);
    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    //this.router.navigate([`../stap-2`]);
  }

  ngOnInit(): void {
    if (this.blob != null) {
      this.toonAfbeelding();
    }

  }

  writeValue(value: null) {
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;


  }

  registerOnTouched(fn: Function) {
  }


}

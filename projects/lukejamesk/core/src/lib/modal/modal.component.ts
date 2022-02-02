import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'ljk-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit, OnChanges {
  @ViewChild('modalTemplate') modalTemplateRef!: TemplateRef<any>;
  @Input() open = false;
  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  private hasMounted = false;
  private portalHost!: DomPortalOutlet;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef,
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['open'].currentValue === true) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  ngAfterViewInit(): void {
    this.hasMounted = true;
    if(this.open) {
      this.openModal();
    }
  }

  private closeModal() {
    if (this.portalHost?.hasAttached()) {
      this.portalHost.detach();
    }
  }

  private openModal() {
    if (this.hasMounted === true && !this.portalHost?.hasAttached()) {
      this.portalHost = new DomPortalOutlet(
        document.body,
        this.componentFactoryResolver,
        this.appRef,
        this.injector,
      );

      const templatePortal = new TemplatePortal(this.modalTemplateRef, this.viewContainerRef);
      if (this.open) {
        this.portalHost.attach(templatePortal);
      }
    }
  }

  close(): void {
    this.openChange.emit(false);
  }
}

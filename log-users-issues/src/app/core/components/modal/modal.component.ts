import { Component, Input, OnInit } from '@angular/core';
import { IModalData, ModalData } from '../../models/modal-data';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalData: IModalData = new ModalData();

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.modalData?.cancelHandler?.();
  }

  ok(){
    this.modalData?.okHandler?.();
  }

}
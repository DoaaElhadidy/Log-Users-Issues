import { Component, OnInit } from '@angular/core';
import { IModalData, ModalData } from './core/models/modal-data';
import { IModalSubjectData, ModalSubjectData } from './core/models/modal-subject-data';
import { ModalService } from './core/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'log-users-issues';
  showModal: boolean | undefined = false;
  modalData: IModalData | undefined = new ModalData();

  constructor(private modalService: ModalService){ }

  ngOnInit(): void {
    this.modalService.modalSubject.subscribe((data: IModalSubjectData) => {
      console.log('data', data);
      
      this.showModal = data.showModal;
      this.modalData = data.modalData;
    });
  }
}

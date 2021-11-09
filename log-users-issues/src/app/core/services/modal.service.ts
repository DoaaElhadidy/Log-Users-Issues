import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IModalSubjectData, ModalSubjectData } from './../models/modal-subject-data';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalSubject = new BehaviorSubject<IModalSubjectData>(new ModalSubjectData());

  constructor() { }

  openModal(modalSubjectData: IModalSubjectData){
    this.modalSubject.next(modalSubjectData);
  }

  closeModal(){
    this.modalSubject.next(new ModalSubjectData());
  }

}

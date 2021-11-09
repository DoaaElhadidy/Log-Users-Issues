import { IModalData } from "./modal-data";

export interface IModalSubjectData {
    showModal?: boolean;
    modalData?:IModalData
}

export class ModalSubjectData implements IModalSubjectData {
    showModal?: boolean;
    modalData?: IModalData;
    constructor(showModal?: boolean, modalData?: IModalData){
        this.showModal = showModal;
        this.modalData = modalData;
    }
}
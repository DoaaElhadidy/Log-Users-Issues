export interface IModalData{
    message?: string;
    okHandler?: () => void;
    cancelHandler?: () => void;
}

export class ModalData implements IModalData{
    message?: string = '';
    okHandler?: () => void = () => {};
    cancelHandler?: () => void = () => {};
    constructor(msg?: string, okHandler?: ()=>void, cancelHandler?: ()=>void){
        this.message = msg;
        this.okHandler = okHandler;
        this.cancelHandler = cancelHandler;
    }
}
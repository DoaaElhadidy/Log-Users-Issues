export interface IModalData{
    message?: string;
    okHandler?: () => void;
    cancelHandler?: () => void;
}

export class ModalData implements IModalData{
    message?: string = '';
    okHandler?: () => void = () => {};
    cancelHandler?: () => void = () => {};
    constructor(message?: string, okHandler?: ()=>void, cancelHandler?: ()=>void){
        this.message = message;
        this.okHandler = okHandler;
        this.cancelHandler = cancelHandler;
    }
}

export interface IModalData{
    type?: string;
    data?: any;
    message?: string;
    okHandler?: () => void;
    cancelHandler?: () => void;
}

export class ModalData implements IModalData{
    type?: string;
    data?: any;
    message?: string = '';
    okHandler?: () => void = () => {};
    cancelHandler?: () => void = () => {};
    constructor(type?: string, data?: any, message?: string, okHandler?: ()=>void, cancelHandler?: ()=>void){
        this.type = type;
        this.data = data;
        this.message = message;
        this.okHandler = okHandler;
        this.cancelHandler = cancelHandler;
    }
}

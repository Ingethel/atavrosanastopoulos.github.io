import { observable } from "mobx";

class ModalStore {
  @observable component: any = null;
  @observable isOpen: boolean = false;
  @observable hasBackdrop: boolean = false;
}

const modalStore = new ModalStore();

export default modalStore;

 export enum MachineTypes {
      MACHINE_TYPE1 = 't1',
      MACHINE_TYPE2 = 't2',
      MACHINE_TYPE3 = 't_new',
      OTHER_TYPE = 'o1',
      AND_ANOTHER_ONE = 'another2';
}

export class Machine {
  public id : string,
  public type : MachineTypes

}



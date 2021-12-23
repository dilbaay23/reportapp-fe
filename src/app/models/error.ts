import {ErrorDefinition} from "./error-definition";
import {Machine} from "./machine";

export class Error {
  public id : string
  public errorDefinition : ErrorDefinition
  public machine : Machine
  public date : Date

}

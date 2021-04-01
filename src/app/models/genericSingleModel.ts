import { ResponseModel } from './responseModel';

export interface GenericSingleModel<T> extends ResponseModel {
  data: T;
}

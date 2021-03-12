import { Product } from './products';
import { ResponseModel } from './responseModel';
//Api-den gelen responler-in propertyleri oldugu kimi yazilmalidi ki mapping etmiyek eave olaraq.

export interface ProductResponseModel extends ResponseModel {
  data: Product[];
}

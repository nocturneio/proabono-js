import ProAbonoModel from '../ProAbonoModel';
import ProAbonoAPI from '../ProAbonoAPI';

export default class Customers extends ProAbonoModel {

  createOrUpdate(email: string, name: string, referenceCustomer: string, language: string, referenceSegment: string, referenceOffer: string, referenceAffiliation: string, metadata: string) {
    return ProAbonoAPI.url(this.endpoint, '/v1/Customer').parameters({
      Email: email,
      Name: name,
      ReferenceCustomer: referenceCustomer,
      Language: language,
      ReferenceSegment: referenceSegment,
      ReferenceOffer: referenceOffer,
      ReferenceAffiliation: referenceAffiliation,
      Metadata: metadata
    }).contentJson().needAuth(this.authorization).post();
  }

  get(referenceCustomer: string, referenceOffer: string) {
    return ProAbonoAPI.url(this.endpoint, '/v1/Customer').parameters({
      ReferenceCustomer: referenceCustomer,
      ReferenceOffer: referenceOffer
    }).contentJson().needAuth(this.authorization).get();
  }

  list(referenceSegment: string, referenceFeature: string, page: number, sizePage: number) {
    return ProAbonoAPI.url(this.endpoint, '/v1/Customers').parameters({
      ReferenceSegment: referenceSegment,
      ReferenceFeature: referenceFeature,
      Page: page,
      SizePage: sizePage
    }).contentJson().needAuth(this.authorization).get();
  }

}
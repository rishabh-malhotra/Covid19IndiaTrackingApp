import { DistrictDeltaDataModel } from './district-delta-data-model.model';

export class DistrictDataModel {
    name: string;
    active: number;
    deceased: number;
    confirmed: number;
    recovered: number;
    notes: string;
    delta: Array<DistrictDeltaDataModel>;
}


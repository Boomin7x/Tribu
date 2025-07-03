export interface IGetBuildingByCategoryParams {
  building_category: string;
  bbox: string;
  limit?: number;
  page?: number;
}

export interface IGetAllBuildingsParams {
  bbox: string;
  limit?: number;
  page?: number;
}

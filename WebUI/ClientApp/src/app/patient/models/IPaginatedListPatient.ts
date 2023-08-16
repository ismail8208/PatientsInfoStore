import { IPatientDto } from "./IPatientDto";

export interface IPaginatedListPatient {
    items?: IPatientDto[];
    pageNumber?: number;
    totalPages?: number;
    totalCount?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
  }
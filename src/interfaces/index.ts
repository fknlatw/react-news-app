export interface INews {
    author: number;
    category:  CategoryType[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title: string;
    url: string;
}

export interface IPaginationProps{
  totalPages: number; 
  handlePageClick: (page: number)=>void; 
  handlePreviousPage: ()=>void; 
  handleNextPage: ()=>void; 
  currentPage: number; 
}
export interface NewsApiResponse{
    news: INews[]; 
    page: number; 
    status: string
}

export interface NewsApiResponse{
    news: INews[]; 
    page: number; 
    status: string
}

export type  SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export interface CategoriesApiResponse{
    categories: CategoryType[]; 
    description: string; 
    status: string;
}

export type ParamsType = Partial<IFilters>
 
export interface IFilters{
    page_number: number;
    page_size: number;
    category: CategoryType|null;
    keywords: string;
}


export type CategoryType = string;
export interface Category {
    ID: number;
    ParentID: number | null;
    Name: string | null;
    ParentCategory: Category;
    SubCategories: Category[];
}
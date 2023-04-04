export interface AutocompleteData {
    id: number;
    name: string;
}

export interface AutocompleteSchema {
    query: string;
    shouldLoadData: boolean;
    isLoading: boolean;
    searchArr: AutocompleteData[];
}

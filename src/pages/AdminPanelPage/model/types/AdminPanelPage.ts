export type AdminPanelPageType = {
    //
};

export interface AdminPanelPageSchema {
    isLoading: boolean;
    error?: string | null;
    data?: AdminPanelPageType;
}

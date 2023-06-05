export type NotificationType = {
    id: string;
    title: string;
    description: string;
    userId: string;
    href?: string;
};

export interface NotificationSchema {
    isLoading: boolean;
    error?: string | null;
    data?: NotificationType;
}

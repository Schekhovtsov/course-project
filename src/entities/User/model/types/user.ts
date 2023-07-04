import { FeatureFlagsType } from '@/shared/types/featureFlags';

import { UserRole } from '../consts/consts';
import { JsonSettings } from './userSettings';

export interface User {
    id: string;
    username: string;
    roles?: UserRole[];
    avatar?: string;
    features?: FeatureFlagsType;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User | null;
    _mounted: boolean;
}

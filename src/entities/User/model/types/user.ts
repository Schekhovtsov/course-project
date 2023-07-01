import { FeatureFlagsType } from '@/shared/types/featureFlags';

import { UserRole } from '../consts/consts';

export interface User {
    id: string;
    username: string;
    roles?: UserRole[];
    avatar?: string;
    features?: FeatureFlagsType;
}

export interface UserSchema {
    authData?: User | null;
    _mounted: boolean;
}

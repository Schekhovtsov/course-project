import { FeatureFlagsType } from '@/shared/types/featureFlags';

import { getFeatureFlag } from '.';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlagsType;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({
    name,
    on,
    off,
}: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
}
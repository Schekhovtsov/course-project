import { FeatureFlagsType } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlagsType;

export function setFeatureFlags(newFeatureFlags?: FeatureFlagsType) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlagsType) {
    return featureFlags[flag];
}

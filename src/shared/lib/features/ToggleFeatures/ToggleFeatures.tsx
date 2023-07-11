import { ReactElement } from 'react';

import { getFeatureFlag } from '../setGetFeatures';

interface FeatureFlagsType {
    isArticleRatingEnabled: boolean;
}

interface ToggleFeaturesProps {
    feature: keyof FeatureFlagsType;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = ({ feature, on, off }: ToggleFeaturesProps) => {
    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};

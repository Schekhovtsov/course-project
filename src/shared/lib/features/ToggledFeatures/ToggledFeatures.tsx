import { ReactElement } from 'react';

import { getFeatureFlag } from '../setGetFeatures';

interface FeatureFlagsType {
    isArticleRatingEnabled: boolean;
    isAppRedesigned?: boolean;
}

interface ToggledFeaturesProps {
    feature: keyof FeatureFlagsType;
    on: ReactElement;
    off: ReactElement;
}

export const ToggledFeatures = ({ feature, on, off }: ToggledFeaturesProps) => {
    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};

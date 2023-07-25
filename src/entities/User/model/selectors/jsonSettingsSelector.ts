import { Theme } from '@/shared/constants/theme';
import { buildSelector } from '@/shared/store';

import { JsonSettings } from '../types/userSettings';

const defaultJsonSettings: JsonSettings = {
    theme: Theme.LIGHT,
};

export const [useJsonSettings, selectJsonSettings] = buildSelector(
    (state) => state?.user?.authData?.jsonSettings ?? defaultJsonSettings
);

import { buildSelector } from '@/shared/store';

import { JsonSettings } from '../types/userSettings';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, selectJsonSettings] = buildSelector(
    (state) => state?.user?.authData?.jsonSettings ?? defaultJsonSettings
);

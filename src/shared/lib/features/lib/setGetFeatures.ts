import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatures: FeatureFlags = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new' ||
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === null,
};
// Features not changes during one session. No need to be reactive.
let featureFlags: FeatureFlags = {
    ...defaultFeatures,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

// TODO featureFlags[flag] ?? true; for test redesign
export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag] ?? true;
}

export function getAllFeatureFlags() {
    return featureFlags;
}

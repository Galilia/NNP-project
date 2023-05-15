import { FeatureFlags } from '@/shared/types/featureFlags';

// Features not changes during one session. No need to be reactive.
let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    if (!featureFlags) {
        return false;
    }

    return featureFlags[flag];
}

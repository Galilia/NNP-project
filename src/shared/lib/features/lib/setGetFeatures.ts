import { FeatureFlags } from '@/shared/types/featureFlags';

// Features not changes during one session. No need to be reactive.
let featureFlags: FeatureFlags = {};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

// TODO featureFlags[flag] ?? true; for test redesign
export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}

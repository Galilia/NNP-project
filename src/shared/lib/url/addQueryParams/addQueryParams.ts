type OptionalRecord = Record<string, string | undefined>;

export function getQueryParams(params: OptionalRecord) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });

    return `?${searchParams.toString()}`;
}

/**
 * Function to add query string parameters to URL
 * @param params
 */

export function addQueryParams(params: OptionalRecord) {
    window.history.pushState(null, '', getQueryParams(params));
}

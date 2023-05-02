export function selectByTestId(testId: string) {
    console.log(testId);
    return `[data-testid=${testId}]`;
}

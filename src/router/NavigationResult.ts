import type { NavigationFailure } from "vue-router";

// Disabling this only due to Vue's nature of navigation result's ending in void.
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type NavigationResult = Promise<void | undefined | NavigationFailure>;

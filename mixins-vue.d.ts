import { Breakpoints } from '~/enums';
import { BreakpointObserverDevice, DeviceChangeEvent } from '~/types';

declare module 'vue/types/vue' {
    interface Vue {
        // breakpoint observer mixin
        device: BreakpointObserverDevice,
        currentBreakpoint: Breakpoints,
        onDeviceChange(e: DeviceChangeEvent): void,
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        // breakpoint observer mixin
        device: BreakpointObserverDevice,
        currentBreakpoint: Breakpoints,
        onDeviceChange(e: DeviceChangeEvent): void,
    }
}

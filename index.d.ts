declare module '*.vue';
import { Breakpoints } from '~/enums';
import { BreakpointObserverDevice, DeviceChangeEvent } from '~/types';

declare module 'vue/types/vue' {
    interface Vue {
        $hasSlot(name: string): boolean,
        device: BreakpointObserverDevice,
        currentBreakpoint: Breakpoints,
        onDeviceChange(e: DeviceChangeEvent): void,
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $hasSlot(name: string): boolean,
        // breakpoint observer mixin
        device: BreakpointObserverDevice,
        currentBreakpoint: Breakpoints,
        onDeviceChange(e: DeviceChangeEvent): void,
    }
}

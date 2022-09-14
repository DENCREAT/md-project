export interface VueSlickBreakpointSettings {
    breakpoint: number,
    settings: VueSlickSettings;
}

export interface VueSlickSettings {
    arrows?: boolean;
    slidesToShow?: number;
    slidesToScroll?: number;
    infinite?: boolean;
    responsive?: VueSlickBreakpointSettings[];
}

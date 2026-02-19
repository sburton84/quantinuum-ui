declare const modes: readonly ["system", "dark", "light"];
type Mode = (typeof modes)[number];
declare const isDark: (mode: Mode) => boolean;
declare const getTheme: () => {
    mode: "system" | "dark" | "light";
    isDark: boolean;
};
declare const setTheme: (mode: Mode) => void;
declare const subscribeToTheme: (callback: (state: {
    isDark: boolean;
    mode: Mode;
}) => void) => () => void;
export { getTheme, setTheme, subscribeToTheme, };

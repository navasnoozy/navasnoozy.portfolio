//src/types/fontsource.d.ts

declare module '@fontsource/anton' {
  const content: string;
  export default content;
}

declare module '@fontsource/caveat/700.css' {
  const content: string;
  export default content;
}


declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }

  function gtag(...args: any[]): void;
  function fbq(...args: any[]): void;
}

export {};


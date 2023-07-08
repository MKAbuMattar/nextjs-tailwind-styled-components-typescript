import 'twin.macro';
import styledImport, { 
  CSSProp,
  css as cssImport,
  DefaultTheme
} from 'styled-components';

declare module 'twin.macro' {
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp<DefaultTheme>;
    tw?: string;
  }
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp<DefaultTheme>;
    tw?: string;
  }

  interface AnchorHTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp<DefaultTheme>;
    tw?: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element;
    }
  }
}

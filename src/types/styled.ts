import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ImgHTMLAttributes,
} from 'react';
import type { CSSProp } from 'styled-components';

export type StyledImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  css?: CSSProp;
  tw?: string;
};

export type StyledLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  css?: CSSProp;
  tw?: string;
};

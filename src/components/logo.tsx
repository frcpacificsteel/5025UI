import * as React from 'react';
import iconSource from '../../Logo-Icon.svg';
import horizontalDarkSource from '../../Logo-H-Dark-Mode.svg';
import horizontalLightSource from '../../Logo-H-Light-Mode.svg';

export type LogoProps = Omit<React.ComponentPropsWithoutRef<'img'>, 'src'>;
export type LogoHorizontalProps = LogoProps & { mode?: 'light' | 'dark' };

/** Pacific Steel's standalone mark. */
export function LogoIcon({ alt = 'Pacific Steel 5025', className = '', ...props }: LogoProps) {
  return <img {...props} src={iconSource} alt={alt} className={`ps-logo ps-logo--icon ${className}`} />;
}

/** Full logo for light surfaces. */
export function LogoHorizontalLightMode({ alt = 'Pacific Steel 5025', className = '', ...props }: LogoProps) {
  return <img {...props} src={horizontalLightSource} alt={alt} className={`ps-logo ps-logo--horizontal ${className}`} />;
}

/** Full logo for dark surfaces. */
export function LogoHorizontalDarkMode({ alt = 'Pacific Steel 5025', className = '', ...props }: LogoProps) {
  return <img {...props} src={horizontalDarkSource} alt={alt} className={`ps-logo ps-logo--horizontal ${className}`} />;
}

/** Select the full logo by the surrounding surface's theme. */
export function LogoHorizontal({ mode = 'light', ...props }: LogoHorizontalProps) {
  return mode === 'dark' ? <LogoHorizontalDarkMode {...props} /> : <LogoHorizontalLightMode {...props} />;
}

export const logoIconSrc = iconSource;
export const logoHorizontalLightSrc = horizontalLightSource;
export const logoHorizontalDarkSrc = horizontalDarkSource;

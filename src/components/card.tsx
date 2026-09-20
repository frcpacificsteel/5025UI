import * as React from 'react';
const part = (name: string, tag: keyof React.JSX.IntrinsicElements = 'div') => ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => React.createElement(tag, { className: `${name} ${className}`, ...props });
export const Card = part('ps-card');
export const CardHeader = part('ps-card__header');
export const CardTitle = part('ps-card__title', 'h3');
export const CardDescription = part('ps-card__description', 'p');
export const CardContent = part('ps-card__content');
export const CardFooter = part('ps-card__footer');

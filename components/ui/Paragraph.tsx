import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: 'sm' | 'base' | 'lg';
};

const paragraphClasses = cva('leading-7 text-foreground [&:not(:first-child)]:mt-6', {
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

const Paragraph: React.FC<ParagraphProps> = ({ className, size, children, ...props }) => {
  return (
    <p className={cn(paragraphClasses({ size }), className)} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;

import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
};

const headingClasses = cva('scroll-m-20 tracking-tight text-gray-900', {
  variants: {
    size: {
      h1: 'text-4xl font-extrabold lg:text-5xl',
      h2: 'border-b pb-2 text-3xl font-semibold first:mt-0',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
    },
  },
  defaultVariants: {
    size: 'h1',
  },
});

const Heading: React.FC<HeadingProps> = ({ as: Tag = 'h1', className, children, ...props }) => {
  return (
    <Tag className={cn(headingClasses({ size: Tag }), className)} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;

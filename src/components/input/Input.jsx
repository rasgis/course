import { forwardRef } from 'react';

export const Input = forwardRef(({ className, ...props }, ref) => {
	return (
		<input
			className={className}
			{...props}
			ref={ref}
		/>
	);
});

Input.displayName = 'Input';

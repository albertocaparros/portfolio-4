import { useState } from 'preact/hooks';

const MenuDownIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		stroke-width='1.5'
		stroke='currentColor'
		class='text-bold h-6 w-6 flex-no-shrink fill-current'>
		<path
			stroke-linecap='round'
			stroke-linejoin='round'
			d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
		/>
	</svg>
);

const MenuUpIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		stroke-width='1.5'
		stroke='currentColor'
		class='text-bold h-6 w-6 flex-no-shrink fill-current'>
		<path
			stroke-linecap='round'
			stroke-linejoin='round'
			d='M6 18L18 6M6 6l12 12'
		/>
	</svg>
);

export default function Expander({ expandId }) {
	const [collapsed, setCollapsed] = useState(true);

	const toggleExpand = () => {
		const extendedContent = document.getElementById(expandId);

		if (collapsed) {
			setCollapsed(false);
			extendedContent.classList.remove('hidden');
		} else {
			setCollapsed(true);
			extendedContent.classList.add('hidden');
		}
	};

	return (
		<>
			{collapsed ? (
				<div onClick={toggleExpand}>{MenuDownIcon}</div>
			) : (
				<div onClick={toggleExpand}>{MenuUpIcon}</div>
			)}
		</>
	);
}

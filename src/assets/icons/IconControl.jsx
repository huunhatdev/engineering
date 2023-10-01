import React from 'react';

const IconControl = ({
	isPower = false,
	isHamless = false,
	isEmotion = false,
	isFairness = false,
	isEditing = false,
}) => {
	if (isPower)
		return (
			<svg
				width={76}
				height={48}
				viewBox='0 0 76 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<rect
					width={76}
					height={48}
					fill='url(#pattern0)'
					style={{ mixBlendMode: 'multiply' }}
				/>
				<defs>
					<pattern
						id='pattern0'
						patternContentUnits='objectBoundingBox'
						width={1}
						height={1}
					>
						<use
							xlinkHref='#image0_31_2668'
							transform='matrix(0.00694444 0 0 0.0109954 0 -0.00578704)'
						/>
					</pattern>
					<image
						id='image0_31_2668'
						width={144}
						height={92}
						xlinkHref='data:image/png;base64,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'
					/>
				</defs>
			</svg>
		);

	if (isHamless)
		return (
			<svg
				width={45}
				height={56}
				viewBox='0 0 45 56'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<rect width={45} height={56} fill='url(#pattern0)' />
				<defs>
					<pattern
						id='pattern0'
						patternContentUnits='objectBoundingBox'
						width={1}
						height={1}
					>
						<use
							xlinkHref='#image0_74_666'
							transform='matrix(0.0124444 0 0 0.01 -0.004 0)'
						/>
					</pattern>
					<image
						id='image0_74_666'
						width={81}
						height={100}
						xlinkHref='data:image/png;base64,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'
					/>
				</defs>
			</svg>
		);

	if (isEmotion)
		return (
			<svg
				width={68}
				height={50}
				viewBox='0 0 68 50'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<g style={{ mixBlendMode: 'multiply' }}>
					<rect width={68} height={50} fill='url(#pattern0)' />
				</g>
				<defs>
					<pattern
						id='pattern0'
						patternContentUnits='objectBoundingBox'
						width={1}
						height={1}
					>
						<use
							xlinkHref='#image0_74_649'
							transform='matrix(0.00862069 0 0 0.0117241 0 -0.00413793)'
						/>
					</pattern>
					<image
						id='image0_74_649'
						width={116}
						height={86}
						xlinkHref='data:image/png;base64,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'
					/>
				</defs>
			</svg>
		);

	if (isFairness)
		return (
			<svg
				width={48}
				height={47}
				viewBox='0 0 48 47'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<g style={{ mixBlendMode: 'multiply' }}>
					<rect width={48} height={47} fill='url(#pattern0)' />
				</g>
				<defs>
					<pattern
						id='pattern0'
						patternContentUnits='objectBoundingBox'
						width={1}
						height={1}
					>
						<use
							xlinkHref='#image0_74_815'
							transform='matrix(0.0106383 0 0 0.0108646 0 -0.00520598)'
						/>
					</pattern>
					<image
						id='image0_74_815'
						width={94}
						height={93}
						xlinkHref='data:image/png;base64,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'
					/>
				</defs>
			</svg>
		);

	if (isEditing)
		return (
			<svg
				width={46}
				height={46}
				viewBox='0 0 46 46'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<g style={{ mixBlendMode: 'multiply' }}>
					<rect width={46} height={46} fill='url(#pattern0)' />
				</g>
				<defs>
					<pattern
						id='pattern0'
						patternContentUnits='objectBoundingBox'
						width={1}
						height={1}
					>
						<use xlinkHref='#image0_74_712' transform='scale(0.0138889)' />
					</pattern>
					<image
						id='image0_74_712'
						width={72}
						height={72}
						xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAIAAADajyQQAAAACXBIWXMAAAsSAAALEgHS3X78AAAE3klEQVRoge3au2/bRhwH8J8f8EbuBjW0QCODLJqiHSI1s0kjAbKIKqTaS+L8AW0ROV5cGxa0qHYROC3iRwAnix05IrObagO0HSp1KdACJJq11GrA5ObFHQ5RqCN5PPEhUYG/k3U+CvfRPUgeOXF5eQnvY6ZH3QCqWJb1/PAQ/c0LgihJgYeMAcyyrKVS2TCMXkl9e0suFslHTSbcqqhxqwBgtbKiKgr5wFTDPFUogbb0wggqlNXKyrO3E8+diXSuip4qhmFs28ZqFmT5+x+23d+Qxh7zUx2fNOrbW1jlV6r68EHF/SWpWxUJKl4QeEEAgNXKivO/r1QVALB+S1ePkVXoo1ws0vRbimCeKo7jnCoUGts0AHTabbWpmKYZb0NZlv3622+wNvnFU8Xz/NFJg2VZd310giaMyYnz8/PPr38auvXkMAzz1z9/B1YbVNWLqiiYDd6uk1PZa9d+//W3EI2mycXFRS6fz2QyhDqequxc9sXLl2QVAAiCwGUyP2stZ6FhGKIkTdqWFbrdgWEYhjwUA8/CgZGLxYIsY4UtTUtw8eA4bm1jnfCrG7rup3rz75ulUtmi+NFVRUFTyxlRkvDz2FHjRS6fp2h21Bi6vlgqu68k3lUwjKVSmTzN/OYYLwijWe49Vdm5bHYu21fNMAj9Rlg5YCTnMU8Vz/ONZrPRbPI831fZx0ZWwfBhfio05FiWPTppBNoCVTBkGFmFPgbaaFQwTBiNCsXPdufW7R93HtOoYGgwehWKp63b7e48eoTVHOX92KAqFE8blrvL9zxVMARYOBUK2Vbf3lpbX/c7NlmYp+pGLkejQmFZtrz4lbs8cAcuQZinqiDLx9QqAFAVZeM7vFtGua/op/KbEp7xXNlpVJDQnkcsqlq1+vzwGVZIqYIkYLGoHj6ouK/Z6VUQ+1BUFSUNKoi3xygvdsiJRQUx9liqVBAXLG0qiGUobtXr+7t7WOFoVRC9x17/8jqFKogO++nxDlYyL4ojV0F0mPkfvn/cabcNXac8PCEVRIQZun52doYV2ra9WCrT2NwqhmF2D/ajqyAizO9hKY3NU3V80qB5I4AmkWCdP9p+/yLb/FSUTzBoEh5mmqZzE3d2dha7I/SzDaqyLOvOrdsfffDhZ59cD3xZoJfwsJamOT9+cfOm+27XbQvRV7XNKvoFbduubVYpmxcBdtoHExckzzv5ns2yrMVSOcQIdD64I2yJYwkJsyzrz07H2T406Qm2pVLZeQgkMK+cCQnDxqHzOQayzYuis4Jt2+Qny7EnLMw1Dp0fWZbde3rgfmzVS9IqCH0R3Gn3LfTYyaelaa1TDevVXoaggnCwlqY5J/GNXA7tOhm6ripK61Trdrt+x87MzAxBBSFh/eNQ+FioVatkD8rU9NST/b0hqCAcDBuH7r0kd+ZFUVyQREmi31GMmIFhhq4H9kwvPM8XviyKkkR+cSCJDAyjuajhOO7u/eWReHqJc5eK4zhxQZKLxeHMInIGhuXyeWxSocuOe/eX0+DpJQysIMuGrpumKUoSWhKSaFnEDAxjWXagLY1RJUWv9cWbK9i45Qo2brmCjVuuYOOW9xaGX1LVNqvMsO4FKUP/7MYZHBblhepUZTJt/RNXJtN50+EXbB+WkMlMJrN7sE9+LTAlKcjy2obve3xY/gepfj/hP6jVHgAAAABJRU5ErkJggg=='
					/>
				</defs>
			</svg>
		);

	return (
		<svg
			width={51}
			height={54}
			viewBox='0 0 51 54'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<g style={{ mixBlendMode: 'multiply' }}>
				<rect width={51} height={54} fill='url(#pattern0)' />
			</g>
			<defs>
				<pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
					<use
						xlinkHref='#image0_74_699'
						transform='matrix(0.012605 0 0 0.0119048 -0.0105042 0)'
					/>
				</pattern>
				<image
					id='image0_74_699'
					width={81}
					height={84}
					xlinkHref='data:image/png;base64,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'
				/>
			</defs>
		</svg>
	);
};

export default IconControl;

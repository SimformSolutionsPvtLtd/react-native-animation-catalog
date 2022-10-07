export const getArcPath = (
  x: number,
  y: number,
  startAngleArg: number,
  endAngleArg: number,
  radius: number
): string => {
  'worklet';
  const CIRCLE = Math.PI * 2;

  const endAngle = endAngleArg % CIRCLE;
  const startAngle = startAngleArg % CIRCLE;

  const angle =
    startAngle > endAngle
      ? CIRCLE - startAngle + endAngle
      : endAngle - startAngle;

  const startSine = Math.sin(startAngle);
  const startCosine = Math.cos(startAngle);
  const endSine = Math.sin(endAngle);
  const endCosine = Math.cos(endAngle);

  const arcFlag = angle > Math.PI ? 1 : 0;

  return `M${x + radius * (1 + startSine)} ${y + radius - radius * startCosine}
              A${radius} ${radius} 0 ${arcFlag} 1 ${
    x + radius * (1 + endSine)
  } ${y + radius - radius * endCosine}`;
};

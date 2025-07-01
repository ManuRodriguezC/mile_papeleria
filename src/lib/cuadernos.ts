// Serie BE COOL

const cuadernos_cosidos_niñas_be_cool = Array.from({ length: 29 }, (_, i) => {
  const num = i + 1;
  return {
    id: `cuaderno-cosido-niña-be-cool-${num}`,
    title: `Cuaderno Cosido Niña KLIPP BE COOL ${num}`,
    image: `/images/cuadernos/cuaderno-cosido-${num}.webp`,
    slug: `cuaderno-cosido-niña-klipp-be-cool-${num}`,
    clase: 'cuaderno',
    type: 'cosido',
    gender: 'niña'
  };
});

const cuadernos_durabook_niñas_be_cool = Array.from({ length: 8 }, (_, i) => {
  const num = i + 1;
  return {
    id: `cuaderno-durabook-niña-be-cool-${num}`,
    title: `Cuaderno Durabook Niña KLIPP BE COOL ${num}`,
    image: `/images/cuadernos/cuaderno-durabook-${num}.webp`,
    slug: `cuaderno-durabook-niña-klipp-be-cool-${num}`,
    clase: 'cuaderno',
    type: 'durabook',
    gender: 'niña'
  };
});

const cuadernos_argollados_niñas_be_cool = Array.from({ length: 34 }, (_, i) => {
  const num = i + 1;
  return {
    id: `cuaderno-argollado-niña-be-cool-${num}`,
    title: `Cuaderno Argollado Niña KLIPP BE COOL ${num}`,
    image: `/images/cuadernos/cuaderno-argollado-${num}.webp`,
    slug: `cuaderno-argollado-niña-klipp-be-cool-${num}`,
    clase: 'cuaderno',
    type: 'argollado',
    gender: 'niña'
  };
});

const cuadernos_cosidos_niños_be_cool = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  return {
    id: `cuaderno-cosido-niño-be-cool-${num}`,
    title: `Cuaderno Cosido Niño KLIPP BE COOL ${num}`,
    image: `/images/cuadernos/cuaderno-cosido-niño-${num}.webp`,
    slug: `cuaderno-cosido-niño-klipp-be-cool-${num}`,
    clase: 'cuaderno',
    type: 'cosido',
    gender: 'niño'
  };
});

const cuadernos_durabook_niños_be_cool = Array.from({ length: 8 }, (_, i) => {
  const num = i + 1;
  return {
    id: `cuaderno-durabook-niño-be-cool-${num}`,
    title: `Cuaderno Durabook Niño KLIPP BE COOL ${num}`,
    image: `/images/cuadernos/cuaderno-durabook-niño-${num}.webp`,
    slug: `cuaderno-durabook-niño-klipp-be-cool-${num}`,
    clase: 'cuaderno',
    type: 'durabook',
    gender: 'niño'
  };
});

const cuadernos_durabook_argollados_be_cool = Array.from({ length: 25 }, (_, i) => {
  const num = i + 1;
  return {
    id: `cuaderno-argollado-niño-be-cool-${num}`,
    title: `Cuaderno argollado Niño KLIPP BE COOL ${num}`,
    image: `/images/cuadernos/cuaderno-argollado-niño-${num}.webp`,
    slug: `cuaderno-argollado-niño-klipp-be-cool-${num}`,
    clase: 'cuaderno',
    type: 'argollado',
    gender: 'niño'
  };
});

//Serie LEGEND
const cuadernos_cosidos_niñas_legend = Array.from({ length: 20 }, (_, i) => {
  const num = i + 1;
  return {
    id: `cuaderno-cosido-niña-legend-${num}`,
    title: `Cuaderno Cosido Niña KLIPP Legend ${num}`,
    image: `/images/cuadernos/cuaderno-cosido-niña-legend-${num}.webp`,
    slug: `cuaderno-cosido-klipp-niña-legend-${num}`,
    clase: 'cuaderno',
    type: 'cosido',
    gender: 'niña'
  };
});

const cuadernos_cosidos_niños_legend = Array.from({ length: 20 }, (_, i) => {
  const num = i + 1;
  return {
    id: `cuaderno-cosido-niño-legend-${num}`,
    title: `Cuaderno Cosido Niño KLIPP Legend ${num}`,
    image: `/images/cuadernos/cuaderno-cosido-niño-legend-${num}.webp`,
    slug: `cuaderno-cosido-klipp-niño-legend-${num}`,
    clase: 'cuaderno',
    type: 'cosido',
    gender: 'niño'
  };
});

export const cuadernos = [
  ...cuadernos_cosidos_niñas_be_cool,
  ...cuadernos_durabook_niñas_be_cool,
  ...cuadernos_argollados_niñas_be_cool,
  ...cuadernos_cosidos_niños_be_cool,
  ...cuadernos_durabook_niños_be_cool,
  ...cuadernos_durabook_argollados_be_cool,
  ...cuadernos_cosidos_niñas_legend,
  ...cuadernos_cosidos_niños_legend,
]
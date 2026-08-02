import type { ImageMetadata } from 'astro';
import portrait from '../assets/media/portrait.jpg';
import research from '../assets/media/frequency-domain.png';
import showcase from '../assets/media/showcase.png';
import flanT5 from '../assets/media/flan-t5.png';
import phaml from '../assets/media/phaml.png';
import tableTennis from '../assets/media/table-tennis.png';
import gallstones from '../assets/media/gallstones.png';
import machineLearning from '../assets/media/machine-learning.png';
import functionalProgramming from '../assets/media/functional-programming.png';
import theory from '../assets/media/theory-of-computing.png';
import softwareEngineering from '../assets/media/software-engineering.jpg';

export { portrait };

const media: Record<string, ImageMetadata> = {
  research,
  showcase,
  'flan-t5': flanT5,
  phaml,
  'table-tennis': tableTennis,
  gallstones,
  'machine-learning': machineLearning,
  'functional-programming': functionalProgramming,
  'theory-of-computing': theory,
  'software-engineering': softwareEngineering,
};

export function getMedia(key?: string) {
  return key ? media[key] : undefined;
}

import { getMarkdownData } from '@/lib/markdown';
import ExperienceClient from './experience-client';

export default function ExperiencePage() {
  const experiences = getMarkdownData('experience');
  
  return <ExperienceClient experiences={experiences} />;
}

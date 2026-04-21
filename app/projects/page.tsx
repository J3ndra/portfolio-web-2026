import { getMarkdownData } from '@/lib/markdown';
import ProjectsClient from './projects-client';

export default function ProjectsPage() {
  const projects = getMarkdownData('projects');
  
  return <ProjectsClient projects={projects} />;
}

import { Text } from '@mantine/core'
import type { ProjectItem } from '@/data/projects'
import classes from './ProjectCard.module.css'

interface ProjectCardProps {
  project: ProjectItem
  featured?: boolean
  onClick: (project: ProjectItem) => void
}

export function ProjectCard({ project, featured = false, onClick }: ProjectCardProps) {
  return (
    <article
      className={`${classes.card} ${featured ? classes.featured : ''}`}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
    >
      <div className={classes.imageWrapper}>
        {project.cover ? (
          <>
            <img src={project.cover} alt="" className={classes.blurBg} aria-hidden />
            <img src={project.cover} alt={project.title} className={classes.image} />
          </>
        ) : (
          <div className={classes.placeholder} />
        )}
      </div>

      <div className={classes.info}>
        <Text size="xs" c="dimmed" tt="uppercase" fw={600} style={{ letterSpacing: '0.08em' }}>
          {project.category}
        </Text>
        <Text size="md" fw={700} mt={4}>
          {project.title}
        </Text>
      </div>
    </article>
  )
}

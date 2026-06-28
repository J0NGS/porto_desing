import { useState } from 'react'
import { Container, rem } from '@mantine/core'
import { projectsData } from '@/data/projects'
import type { ProjectItem } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectLightbox } from './ProjectLightbox'
import classes from './PortfolioSection.module.css'

export function PortfolioSection() {
  const [selected, setSelected] = useState<ProjectItem | null>(null)

  return (
    <>
      <section id="portfolio" style={{ paddingBlock: rem(100) }}>
        <Container size="xl">
          <div className={classes.grid}>
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={index % 3 === 0}
                onClick={setSelected}
              />
            ))}
          </div>
        </Container>
      </section>

      <ProjectLightbox project={selected} onClose={() => setSelected(null)} />
    </>
  )
}

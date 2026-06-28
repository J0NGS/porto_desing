import { useState, useEffect, useCallback } from 'react'
import { Modal, ActionIcon, Text, Group, rem } from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import type { ProjectItem } from '@/data/projects'
import classes from './ProjectLightbox.module.css'

interface ProjectLightboxProps {
  project: ProjectItem | null
  onClose: () => void
}

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const [index, setIndex] = useState(0)

  const images = project
    ? [project.cover, ...project.images].filter(Boolean)
    : []

  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), [])
  const next = useCallback(
    () => setIndex(i => Math.min(Math.max(images.length - 1, 0), i + 1)),
    [images.length],
  )

  useEffect(() => { setIndex(0) }, [project])

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, prev, next])

  const hasMany = images.length > 1

  return (
    <Modal
      opened={!!project}
      onClose={onClose}
      fullScreen
      withCloseButton={false}
      closeOnClickOutside={false}
      padding={0}
      styles={{
        content: { background: '#0e0c0b' },
        body: { height: '100%', padding: 0 },
      }}
    >
      {/* overlay: clicar aqui fecha */}
      <div className={classes.overlay} onClick={onClose}>
        {/* content: clicar aqui NÃO fecha */}
        <div className={classes.content} onClick={e => e.stopPropagation()}>
          {project && (
            <>
              <div className={classes.top}>
                <div>
                  <Text size="xs" c="dimmed" tt="uppercase" fw={600} style={{ letterSpacing: '0.08em' }}>
                    {project.category}
                  </Text>
                  <Text size="lg" fw={700} c="white" mt={2}>
                    {project.title}
                  </Text>
                </div>

                <Group gap="sm">
                  {hasMany && (
                    <Text size="sm" c="dimmed">
                      {index + 1} / {images.length}
                    </Text>
                  )}
                  <ActionIcon
                    onClick={onClose}
                    variant="subtle"
                    color="gray"
                    size="lg"
                    aria-label="Fechar"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </ActionIcon>
                </Group>
              </div>

              <div className={classes.imageArea}>
                {hasMany && (
                  <ActionIcon
                    onClick={prev}
                    disabled={index === 0}
                    variant="subtle"
                    color="gray"
                    size="xl"
                    className={classes.arrow}
                    aria-label="Anterior"
                  >
                    <IconChevronLeft size={28} />
                  </ActionIcon>
                )}

                <div className={classes.imageWrapper}>
                  {images.length > 0 ? (
                    <div key={index} className={classes.imageFrame}>
                      <img src={images[index]} alt="" className={classes.blurBg} aria-hidden />
                      <img
                        src={images[index]}
                        alt={`${project.title} — ${index + 1}`}
                        className={classes.image}
                      />
                    </div>
                  ) : (
                    <div key="placeholder" className={classes.placeholder} />
                  )}
                </div>

                {hasMany && (
                  <ActionIcon
                    onClick={next}
                    disabled={index === images.length - 1}
                    variant="subtle"
                    color="gray"
                    size="xl"
                    className={classes.arrow}
                    aria-label="Próxima"
                  >
                    <IconChevronRight size={28} />
                  </ActionIcon>
                )}
              </div>

              {hasMany && (
                <Group justify="center" gap={rem(8)} className={classes.dots}>
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`${classes.dot} ${i === index ? classes.dotActive : ''}`}
                      aria-label={`Imagem ${i + 1}`}
                    />
                  ))}
                </Group>
              )}
            </>
          )}
        </div>
      </div>
    </Modal>
  )
}

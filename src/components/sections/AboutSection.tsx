import { Container, Grid, Title, Text, Stack, rem } from '@mantine/core'
import classes from './AboutSection.module.css'

const aboutData = {
  image: '/assets/about_me.png',
  title: 'Sobre Daniel Porto',
  description:
    'Olá, meu nome é Daniel Porto, sou Designer Gráfico há mais de 5 anos. Graduado em Arquitetura & Urbanismo, encontrei minha paixão no designer, sou estudioso na área de Identidade Visual com um desenvolvimento minimalista, simples e com significado.',
}

export function AboutSection() {
  return (
    <section id="sobre" className={classes.section}>
      <Container size="xl">
        <Grid gutter={{ base: rem(40), sm: rem(64) }} align="center">
          <Grid.Col span={{ base: 12, sm: 5 }}>
            {aboutData.image ? (
              <img
                src={aboutData.image}
                alt="Foto sobre Daniel Porto"
                className={classes.image}
              />
            ) : (
              <div className={classes.placeholder} />
            )}
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 7 }}>
            <Stack gap="lg">
              <Title
                order={2}
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                {aboutData.title}
              </Title>
              <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>
                {aboutData.description}
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  )
}

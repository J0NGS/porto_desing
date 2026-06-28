import { Container, SimpleGrid, Stack, Button, Text, rem } from '@mantine/core'
import { socialLinks } from '@/data/social'
import classes from './SocialSection.module.css'

function InstagramEmbed({ url }: { url: string }) {
  const embedUrl = url.replace(/\/?$/, '/embed/')
  const handle = '@' + url.replace('https://www.instagram.com/', '').replace(/\/$/, '')

  return (
    <Stack gap={rem(12)}>
      <Text
        size="xs"
        c="dimmed"
        tt="uppercase"
        fw={600}
        style={{ letterSpacing: '0.08em' }}
      >
        {handle}
      </Text>
      <div className={classes.embedWrapper}>
        <iframe
          src={embedUrl}
          className={classes.iframe}
          frameBorder={0}
          scrolling="no"
          allowTransparency
          title={`Perfil Instagram ${handle}`}
        />
      </div>
    </Stack>
  )
}

export function SocialSection() {
  return (
    <section id="redes" className={classes.section}>
      <Container size="md">
        <Stack align="center" gap={rem(48)}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={rem(32)} w="100%">
            {socialLinks.instagram.map((profile, i) => (
              <InstagramEmbed key={i} url={profile.url} />
            ))}
          </SimpleGrid>

          <Button
            component="a"
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            radius="md"
            px={rem(48)}
          >
            Fale conosco
          </Button>
        </Stack>
      </Container>
    </section>
  )
}

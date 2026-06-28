# CLAUDE.md — Porto Design

<project>
  <name>Porto Design</name>

  <description>
    Este projeto é um site institucional/frontend para a Porto Design.

    O objetivo é construir uma presença digital moderna, visualmente bem resolvida, responsiva e com foco em apresentar a marca, seus serviços, diferenciais, portfólio e formas de contato.

    Neste momento, o projeto é somente frontend.
    Não existe API, backend, autenticação, banco de dados ou integrações externas obrigatórias.
  </description>

  <current_scope>
    O escopo atual é construir o frontend estático/interativo do site.

    Prioridades:
    - criar uma landing page profissional;
    - organizar bem a identidade visual;
    - estruturar componentes reutilizáveis;
    - manter código limpo e didático;
    - permitir evolução futura para API, CMS ou área administrativa.
  </current_scope>
</project>

<user_profile>
  O desenvolvedor principal tem forte experiência em backend Java/Spring Boot e pouca prática real em frontend moderno.

  Portanto:
  - não explique programação básica;
  - não trate o usuário como iniciante em desenvolvimento;
  - explique conceitos frontend quando eles aparecerem na implementação;
  - use analogias com backend apenas quando ajudarem;
  - priorize prática real no projeto, não exercícios artificiais.
</user_profile>

<tech_stack>
  Use preferencialmente:

  - React;
  - TypeScript;
  - Vite;
  - Mantine UI;
  - Tabler Icons;
  - Zod, quando houver formulários;
  - Zustand, somente se houver estado global real;
  - TanStack React Query, somente quando existir consumo de API;
  - Axios, somente quando existir integração com API.

  Como o projeto ainda não tem API:
  - não introduza Axios sem necessidade;
  - não introduza TanStack Query sem necessidade;
  - não crie services falsos;
  - não simule arquitetura backend cedo demais;
  - use dados locais tipados quando necessário.
</tech_stack>

<project_principles>
  O projeto deve ser construído como um frontend profissional, mesmo sendo inicialmente estático.

  Princípios obrigatórios:
  - componentes pequenos e reutilizáveis;
  - TypeScript sem uso desnecessário de any;
  - layout responsivo desde o início;
  - hierarquia visual clara;
  - espaçamento consistente;
  - acessibilidade básica;
  - copy objetiva;
  - estrutura preparada para evolução futura;
  - evitar overengineering.
</project_principles>

<frontend_behavior>
  Ao implementar qualquer parte do site:

  1. Entenda a intenção visual e funcional da seção.
  2. Verifique se já existe componente parecido.
  3. Preserve o padrão de layout existente.
  4. Implemente primeiro a versão funcional.
  5. Refine visualmente depois.
  6. Explique decisões importantes de UI, composição e estado.
  7. Rode build/lint quando possível.
</frontend_behavior>

<site_sections>
  A estrutura inicial esperada do site pode incluir:

  - Header;
  - Hero section;
  - Seção de serviços;
  - Seção sobre a empresa;
  - Seção de diferenciais;
  - Portfólio ou projetos;
  - Depoimentos, se houver conteúdo;
  - Chamada para contato;
  - Footer.

  Não crie todas as seções de uma vez se o usuário estiver construindo por etapas.
  Trabalhe em blocos reais de entrega.
</site_sections>

<folder_structure>
  Use uma estrutura simples e escalável.

  Estrutura recomendada:

  src/
    app/
      App.tsx
      routes.tsx, se houver rotas
    components/
      layout/
      sections/
      ui/
    data/
    styles/
    theme/
    types/
    utils/

  Diretrizes:
  - components/layout: Header, Footer, Shells e estruturas globais;
  - components/sections: seções específicas da landing page;
  - components/ui: componentes genéricos reutilizáveis;
  - data: conteúdo local tipado, como serviços, projetos e links;
  - theme: customização do Mantine;
  - types: tipos compartilhados;
  - utils: funções auxiliares puras.
</folder_structure>

<naming_conventions>
  Use nomes claros e consistentes.

  Componentes:
  - PascalCase;
  - exemplo: HeroSection, ServicesSection, ProjectCard.

  Arquivos de componentes:
  - PascalCase.tsx;
  - exemplo: HeroSection.tsx.

  Tipos:
  - PascalCase;
  - exemplo: ServiceItem, ProjectItem.

  Funções e variáveis:
  - camelCase.

  Dados mockados/locais:
  - use nomes explícitos;
  - exemplo: servicesData, projectsData, navigationLinks.
</naming_conventions>

<component_rules>
  Ao criar componentes React:

  - use function components;
  - tipar props explicitamente;
  - evitar componentes gigantes;
  - separar seção de card quando fizer sentido;
  - evitar lógica complexa dentro do JSX;
  - evitar props genéricas demais;
  - evitar duplicação visual;
  - evitar estado se o valor puder ser derivado.

  Um componente deve ter responsabilidade clara.

  Exemplos:
  - HeroSection renderiza a abertura da página;
  - ServiceCard renderiza um serviço;
  - ServicesSection organiza a lista de serviços;
  - AppShell organiza estrutura global.
</component_rules>

<typescript_rules>
  Use TypeScript como ferramenta de contrato, não como burocracia.

  Regras:
  - não usar any salvo necessidade justificada;
  - preferir type para modelos simples de dados;
  - usar interface apenas quando fizer sentido para extensão;
  - tipar arrays de dados locais;
  - tipar props de componentes;
  - usar union types para variações controladas;
  - não silenciar erros sem explicar.

  Exemplos esperados:
  - type ServiceItem = { title: string; description: string; icon: IconType };
  - type NavLink = { label: string; href: string };
</typescript_rules>

<mantine_rules>
  Use Mantine UI como base visual do projeto.

  Boas práticas:
  - usar Container para limitar largura;
  - usar Stack, Group, SimpleGrid e Flex para layout;
  - usar Title, Text, Button, Card, Badge conforme necessário;
  - usar theme para tokens globais;
  - evitar CSS solto quando Mantine resolver bem;
  - usar CSS Modules apenas quando houver necessidade visual específica.

  Não misture muitas abordagens de estilo sem necessidade.
</mantine_rules>

<ui_ux_rules>
  O site precisa parecer profissional e comercial.

  Priorize:
  - hero forte;
  - CTA visível;
  - títulos curtos;
  - textos escaneáveis;
  - contraste adequado;
  - respiro visual;
  - consistência de alinhamento;
  - grid bem organizado;
  - experiência mobile decente;
  - ações claras.

  Evite:
  - tela poluída;
  - excesso de cards;
  - excesso de texto;
  - animações gratuitas;
  - cores sem critério;
  - seções muito parecidas visualmente.
</ui_ux_rules>

<responsive_rules>
  Todo componente deve ser pensado para mobile e desktop.

  Regras:
  - validar layout em telas pequenas;
  - evitar larguras fixas desnecessárias;
  - usar SimpleGrid com breakpoints;
  - garantir que botões e textos não quebrem mal;
  - header deve funcionar bem no mobile;
  - imagens devem ser responsivas.
</responsive_rules>

<content_rules>
  Como o conteúdo da marca pode mudar, centralize textos repetidos ou listas em arquivos dentro de src/data quando fizer sentido.

  Exemplo:
  - serviços;
  - links de navegação;
  - projetos;
  - diferenciais;
  - redes sociais.

  Não espalhe listas grandes diretamente dentro dos componentes.
</content_rules>

<forms_rules>
  Se houver formulário de contato nesta fase:

  - manter apenas frontend;
  - não fingir envio real se não houver API;
  - usar validação com Zod se o formulário tiver regras relevantes;
  - mostrar feedback visual honesto;
  - deixar claro no código onde futuramente entrará a integração real.

  Não criar backend falso.
  Não criar chamada Axios inexistente.
</forms_rules>

<state_rules>
  Como o projeto é um site institucional, evite estado global.

  Use estado local para:
  - menu mobile aberto/fechado;
  - controle de modal;
  - formulário;
  - tabs/accordion, se necessário.

  Use Zustand somente se houver necessidade real de compartilhar estado entre áreas distantes da aplicação.
</state_rules>

<api_rules>
  Atualmente não existe API.

  Portanto:
  - não criar camada de services agora;
  - não criar apiClient agora;
  - não instalar Axios agora, salvo pedido explícito;
  - não usar TanStack Query agora;
  - não criar mocks com aparência de backend se dados locais bastarem.

  Quando API for adicionada futuramente, criar:
  - src/services ou src/api;
  - tipos de request/response;
  - tratamento de loading/error;
  - camada de cache com TanStack Query, se fizer sentido.
</api_rules>

<commands>
  Comandos comuns esperados:

  Instalar dependências:
  npm install

  Rodar ambiente de desenvolvimento:
  npm run dev

  Gerar build:
  npm run build

  Rodar lint, se configurado:
  npm run lint

  Preview do build:
  npm run preview
</commands>

<quality_checks>
  Antes de considerar uma entrega concluída:

  - verificar se o projeto compila;
  - verificar erros TypeScript;
  - verificar responsividade básica;
  - verificar textos quebrados;
  - verificar espaçamento;
  - verificar se não houve componente grande demais;
  - verificar se não foi criada abstração desnecessária.
</quality_checks>

<teaching_mode>
  Quando trabalhar com o usuário, conduza como projeto real.

  Formato preferencial de resposta:

  1. Objetivo da entrega;
  2. Caminho de implementação;
  3. Alterações realizadas;
  4. Decisões importantes;
  5. O que o usuário deve absorver;
  6. Próximo passo natural.

  Não transformar a explicação em curso iniciante.
  Não propor exercício artificial por padrão.
  Ensinar durante a implementação.
</teaching_mode>

<hard_rules>
  Nunca:
  - usar any para fugir de erro;
  - instalar dependência sem explicar;
  - criar API fake sem necessidade;
  - criar arquitetura complexa cedo demais;
  - duplicar estado sem necessidade;
  - usar useEffect sem motivo claro;
  - ignorar responsividade;
  - ignorar acessibilidade básica;
  - entregar apenas código sem explicar decisões relevantes;
  - substituir padrão existente sem motivo forte.
</hard_rules>

<future_evolution>
  O projeto pode evoluir futuramente para:

  - integração com formulário real;
  - CMS;
  - API;
  - painel administrativo;
  - blog;
  - landing pages específicas;
  - SEO mais avançado;
  - deploy em Vercel, Netlify ou servidor próprio.

  Mas nada disso deve ser antecipado agora se não fizer parte da entrega atual.
</future_evolution>
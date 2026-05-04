export const languages = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
} as const;

export const defaultLang = 'en' as const;

export const ui = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.manifesto': 'Manifesto',
    'nav.plans': 'Plans',
    'nav.contact': 'Contact',
    'nav.techniques': 'Our Techniques',

    // Hero
    'hero.tagline': 'Software solutions for small businesses and their unique complexities',
    'hero.subtitle':
      'We immerse ourselves in your company\'s problems to find the simplest, most effective solution.',
    'hero.cta': 'Learn more',

    // Techniques page
    'techniques.title': 'Our Techniques',
    'techniques.subtitle': 'The data science and engineering methods behind our work.',

    // Services
    'services.title': 'Services',
    'services.subtitle': 'We bridge the gap between data and decisions.',
    'services.ml.title': 'Machine Learning & AI',
    'services.ml.description':
      'From predictive models to generative AI, we build solutions that learn from your data and automate decision-making at scale.',
    'services.nlp.title': 'Natural Language Processing',
    'services.nlp.description':
      'Unlock value from unstructured text. We develop embeddings, vector search, information extraction, and fine-tuned LLMs tailored to your domain.',
    'services.process.title': 'Process Optimization',
    'services.process.description':
      'We redesign workflows by quantifying inefficiencies and transforming time-consuming processes into lean, data-informed systems.',
    'services.analytics.title': 'Data Analytics & Strategy',
    'services.analytics.description':
      'Turn raw data into actionable insights. We help organizations build a data culture and make evidence-based decisions with confidence.',

    // About
    'about.title': 'About us',
    'about.p1':
      'Kukaisolutions is a specialized consulting firm that combines deep mathematical and computational expertise with practical industry experience.',
    'about.p2':
      'We work at the intersection of data science, machine learning, and business strategy—helping organizations uncover hidden inefficiencies and transform them into measurable, data-informed outcomes.',
    'about.p3':
      'Our team has delivered solutions across sectors including e-commerce, accounting, and health administration. We bring the rigor of academic research to the pace of industry.',
    'about.bullet1': 'Cross-functional collaboration with your teams',
    'about.bullet2':
      'Interdisciplinary approach spanning statistics, ML, and domain expertise',
    'about.bullet3': 'From pilot projects to full production systems',
    'about.bullet4': 'Transparent, reproducible, and auditable methods',

    // Complexities
    'complexities.title': 'Small Business Complexities',
    'complexities.intro': 'Specialists often overlook the nontrivial steps in their own workflows. Our goal is to uncover and address these hidden complexities through software.',
    'complexities.item1.label': 'Lack of uniformity',
    'complexities.item1.body': 'Different employees handle the same processes differently, producing inconsistent outcomes, costs, and profit margins.',
    'complexities.item2.label': 'Lack of transparency',
    'complexities.item2.body': 'Processes are well established, but there is no governance, which prevents timely decisions from being made.',
    'complexities.item3.label': 'Lack of metrics',
    'complexities.item3.body': "The team can tell good outcomes from bad, but there's no clear way to measure them.",
    'complexities.item4.label': 'Lack of structure',
    'complexities.item4.body': 'Outcomes are clear, but the processes to reach them vary or are not well defined.',
    'complexities.item5.label': 'Repetitive or time-consuming tasks',
    'complexities.item5.body': "Teams' efforts are wasted on tasks that are necessary but add no value to the final product.",
    'complexities.item6.label': 'Lack of governance',
    'complexities.item6.body': "Where's that file? Why are there two copies of this spreadsheet? Which version is the most recent?",
    'complexities.item7.label': 'Noise in decision-making',
    'complexities.item7.body': 'Decisions based on the same facts should be consistent, regardless of who made them or when.',

    // Manifesto
    'manifesto.title': 'Our Manifesto',
    'manifesto.intro': "We dig deep. We immerse ourselves in your company's problems with the goal of finding the simplest, most effective solution.",
    'manifesto.value1.label': 'Partnership',
    'manifesto.value1.body': "We are technical, but most of the time we are not specialists in your field. You know where the value is; we know how to improve process throughput, increase reliability, and make your company more robust and efficient. It's joint work — we complement each other.",
    'manifesto.value2.label': 'Non-triviality',
    'manifesto.value2.body': 'What you do is non-trivial — otherwise you would have already found software that does it.',
    'manifesto.value3.label': 'Growth',
    'manifesto.value3.body': 'We grow together.',
    'manifesto.value4.label': 'Learning',
    'manifesto.value4.body': 'We learn together.',
    'manifesto.value5.label': 'Fairness & Commitment',
    'manifesto.value5.body': "You are a small business, and so are we. There’s nothing wrong with being small, but you have to have clarity of your goals and priorities. A software project is a commitment from both sides. As Dylan says: “we’ll let you be in our dreams if we can be in yours.” We shall not refrain from pulling out of wavering partnerships.",
    'manifesto.value6.label': 'Respect',
    'manifesto.value6.body': 'We work <strong>with</strong> you, not <strong>for</strong> you.',
    'manifesto.value7.label': 'Honesty',
    'manifesto.value7.body': 'We reserve our right to tell you when we think you are wrong. We expect the same from you. Honest conversations are how we find the path that brings value to your company — and, as a byproduct, to Kukai as well.',

    // Plans
    'plans.howwework.title': 'How We Work',
    'plans.howwework.subtitle': 'Small, focused software solutions — ready for testing within 1–3 months from conception.',
    'plans.step1.title': 'Prospecting',
    'plans.step1.body': 'Developers and business stakeholders meet to understand the problem and define the main goals.',
    'plans.step2.title': 'Modeling',
    'plans.step2.body': 'Together, we map the problem and the flow of business value.',
    'plans.step3.title': 'Development',
    'plans.step3.body': 'Through iterative cycles, stakeholders and developers build and test the product, reaching a usable result by incremental steps.',
    'plans.collab.title': 'Collaboration Models',
    'plans.plana.label': 'Plan A — Partnership:',
    'plans.plana.body': 'We develop software with broader applicability. You pay a development fee and a monthly subscription. The software is not exclusively yours and may be offered to other companies, including competitors. This is the most cost-effective option.',
    'plans.planb.label': 'Plan B — Consulting:',
    'plans.planb.body': 'We build a custom solution tailored to your company. The code and intellectual property are yours, delivered at the end of the project. You are responsible for maintenance, deployment, and infrastructure. This option is more expensive.',
    'plans.table.header.plana': 'Plan A (Partnership)',
    'plans.table.header.planb': 'Plan B (Consulting)',
    'plans.table.row1.label': 'Maintenance',
    'plans.table.row1.a': "Kukai’s responsibility",
    'plans.table.row1.b': "Your company’s responsibility",
    'plans.table.row2.label': 'Infrastructure',
    'plans.table.row2.a': "Kukai’s responsibility",
    'plans.table.row2.b': "Your company’s responsibility",
    'plans.table.row3.label': 'Technology',
    'plans.table.row3.a': 'Owned by Kukai Solutions',
    'plans.table.row3.b': 'Owned by your company',
    'plans.table.row4.label': 'Project duration',
    'plans.table.row4.a': '1–3 months',
    'plans.table.row4.b': 'Varies by complexity',
    'plans.table.row5.label': 'Software ownership',
    'plans.table.row5.a': 'Kukai owns it',
    'plans.table.row5.b': 'Your company owns it',
    'plans.table.row6.label': 'Price',
    'plans.table.row6.a': 'Low – Medium',
    'plans.table.row6.b': 'Medium – High',
    'plans.table.row7.label': 'Payment',
    'plans.table.row7.a': 'Development fee + monthly subscription',
    'plans.table.row7.b': 'Development fee + final delivery fee',
    'plans.pricing.title': 'Pricing',
    'plans.pricing.item1.label': 'Plan A – Development',
    'plans.pricing.item1.unit': 'per development month',
    'plans.pricing.item2.label': 'Plan B – Development',
    'plans.pricing.item2.unit': 'per development month',
    'plans.pricing.item3.label': 'Plan A – Subscription',
    'plans.pricing.item3.unit': 'per month',
    'plans.pricing.disclaimer': 'Prices may vary depending on software complexity and the number of developers involved.',

    // Contact
    'contact.title': 'Get in touch',
    'contact.subtitle': 'Ready to start a conversation?',
    'contact.button': 'Say hello!',

    // Footer
    'footer.rights': 'All rights reserved.',
  },

  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.manifesto': 'Manifesto',
    'nav.plans': 'Planos',
    'nav.contact': 'Contato',
    'nav.techniques': 'Nossas Técnicas',

    // Hero
    'hero.tagline': 'Soluções de software para pequenas empresas e suas complexidades únicas',
    'hero.subtitle':
      'Mergulhamos nos problemas da sua empresa para encontrar a solução mais simples e eficaz.',
    'hero.cta': 'Saiba mais',

    // Techniques page
    'techniques.title': 'Nossas Técnicas',
    'techniques.subtitle': 'Os métodos de ciência de dados e engenharia por trás do nosso trabalho.',

    // Services
    'services.title': 'Serviços',
    'services.subtitle': 'Conectamos dados a decisões.',
    'services.ml.title': 'Machine Learning & IA',
    'services.ml.description':
      'De modelos preditivos a IA generativa, construímos soluções que aprendem com seus dados e automatizam decisões em escala.',
    'services.nlp.title': 'Processamento de Linguagem Natural',
    'services.nlp.description':
      'Extraia valor de textos não estruturados. Desenvolvemos embeddings, busca vetorial, extração de informação e LLMs ajustados ao seu domínio.',
    'services.process.title': 'Otimização de Processos',
    'services.process.description':
      'Redesenhamos fluxos de trabalho quantificando ineficiências e transformando processos demorados em sistemas enxutos e orientados por dados.',
    'services.analytics.title': 'Analytics & Estratégia de Dados',
    'services.analytics.description':
      'Transforme dados brutos em insights acionáveis. Ajudamos organizações a construir uma cultura de dados e tomar decisões baseadas em evidências.',

    // About
    'about.title': 'Sobre nós',
    'about.p1':
      'A Kukaisolutions é uma consultoria especializada que combina profunda expertise matemática e computacional com experiência prática na indústria.',
    'about.p2':
      'Atuamos na interseção entre ciência de dados, machine learning e estratégia de negócios—ajudando organizações a descobrir ineficiências ocultas e transformá-las em resultados mensuráveis.',
    'about.p3':
      'Nossa equipe entregou soluções em setores como e-commerce, contabilidade e administração de saúde. Trazemos o rigor da pesquisa acadêmica ao ritmo da indústria.',
    'about.bullet1': 'Colaboração multifuncional com suas equipes',
    'about.bullet2':
      'Abordagem interdisciplinar abrangendo estatística, ML e expertise no domínio',
    'about.bullet3': 'De projetos piloto a sistemas em produção',
    'about.bullet4': 'Métodos transparentes, reprodutíveis e auditáveis',

    // Complexities
    'complexities.title': 'Complexidades de Pequenas Empresas',
    'complexities.intro': 'Especialistas frequentemente ignoram as etapas não triviais em seus próprios fluxos de trabalho. Nosso objetivo é descobrir e abordar essas complexidades ocultas por meio de software.',
    'complexities.item1.label': 'Falta de uniformidade',
    'complexities.item1.body': 'Funcionários diferentes lidam com os mesmos processos de forma distinta, produzindo resultados, custos e margens de lucro inconsistentes.',
    'complexities.item2.label': 'Falta de transparência',
    'complexities.item2.body': 'Os processos estão bem estabelecidos, mas não há governança, o que impede que decisões sejam tomadas em tempo hábil.',
    'complexities.item3.label': 'Falta de métricas',
    'complexities.item3.body': 'A equipe consegue distinguir bons resultados dos ruins, mas não há uma forma clara de medi-los.',
    'complexities.item4.label': 'Falta de estrutura',
    'complexities.item4.body': 'Os resultados são claros, mas os processos para alcançá-los variam ou não estão bem definidos.',
    'complexities.item5.label': 'Tarefas repetitivas ou demoradas',
    'complexities.item5.body': 'O esforço das equipes é desperdiçado em tarefas necessárias, mas que não agregam valor ao produto final.',
    'complexities.item6.label': 'Falta de governança',
    'complexities.item6.body': 'Onde está aquele arquivo? Por que existem duas cópias desta planilha? Qual é a versão mais recente?',
    'complexities.item7.label': 'Ruído na tomada de decisões',
    'complexities.item7.body': 'Decisões baseadas nos mesmos fatos devem ser consistentes, independentemente de quem as tomou ou quando.',

    // Manifesto
    'manifesto.title': 'Nosso Manifesto',
    'manifesto.intro': 'Nos aprofundamos. Mergulhamos nos problemas da sua empresa com o objetivo de encontrar a solução mais simples e eficaz.',
    'manifesto.value1.label': 'Parceria',
    'manifesto.value1.body': 'Somos técnicos, mas na maioria das vezes não somos especialistas na sua área. Você sabe onde está o valor; nós sabemos como melhorar o fluxo dos processos, aumentar a confiabilidade e tornar sua empresa mais robusta e eficiente. É um trabalho conjunto — nos complementamos.',
    'manifesto.value2.label': 'Não trivialidade',
    'manifesto.value2.body': 'O que você faz não é trivial — caso contrário, você já teria encontrado um software que o faça.',
    'manifesto.value3.label': 'Crescimento',
    'manifesto.value3.body': 'Crescemos juntos.',
    'manifesto.value4.label': 'Aprendizado',
    'manifesto.value4.body': 'Aprendemos juntos.',
    'manifesto.value5.label': 'Justiça e Compromisso',
    'manifesto.value5.body': 'Você é uma pequena empresa, e nós também. Não há nada de errado em ser pequeno, mas é preciso ter clareza sobre seus objetivos e prioridades. Um projeto de software é um compromisso de ambos os lados. Como diz Dylan: “vamos deixar você entrar em nossos sonhos se pudermos entrar nos seus.” Não hesitaremos em sair de parcerias vacilantes.',
    'manifesto.value6.label': 'Respeito',
    'manifesto.value6.body': 'Trabalhamos <strong>com</strong> você, não <strong>para</strong> você.',
    'manifesto.value7.label': 'Honestidade',
    'manifesto.value7.body': 'Reservamos nosso direito de dizer quando achamos que você está errado. Esperamos o mesmo de você. Conversas honestas são como encontramos o caminho que traz valor à sua empresa — e, como subproduto, à Kukai também.',

    // Plans
    'plans.howwework.title': 'Como Trabalhamos',
    'plans.howwework.subtitle': 'Soluções de software pequenas e focadas — prontas para teste em 1 a 3 meses após a concepção.',
    'plans.step1.title': 'Prospecção',
    'plans.step1.body': 'Desenvolvedores e partes interessadas de negócios se reúnem para entender o problema e definir os principais objetivos.',
    'plans.step2.title': 'Modelagem',
    'plans.step2.body': 'Juntos, mapeamos o problema e o fluxo de valor do negócio.',
    'plans.step3.title': 'Desenvolvimento',
    'plans.step3.body': 'Por meio de ciclos iterativos, as partes interessadas e os desenvolvedores constroem e testam o produto, alcançando um resultado utilizável por etapas incrementais.',
    'plans.collab.title': 'Modelos de Colaboração',
    'plans.plana.label': 'Plano A — Parceria:',
    'plans.plana.body': 'Desenvolvemos software com maior aplicabilidade. Você paga uma taxa de desenvolvimento e uma assinatura mensal. O software não é exclusivamente seu e pode ser oferecido a outras empresas, incluindo concorrentes. Esta é a opção mais econômica.',
    'plans.planb.label': 'Plano B — Consultoria:',
    'plans.planb.body': 'Construímos uma solução personalizada para sua empresa. O código e a propriedade intelectual são seus, entregues ao final do projeto. Você é responsável pela manutenção, implantação e infraestrutura. Esta opção é mais cara.',
    'plans.table.header.plana': 'Plano A (Parceria)',
    'plans.table.header.planb': 'Plano B (Consultoria)',
    'plans.table.row1.label': 'Manutenção',
    'plans.table.row1.a': 'Responsabilidade da Kukai',
    'plans.table.row1.b': 'Responsabilidade da sua empresa',
    'plans.table.row2.label': 'Infraestrutura',
    'plans.table.row2.a': 'Responsabilidade da Kukai',
    'plans.table.row2.b': 'Responsabilidade da sua empresa',
    'plans.table.row3.label': 'Tecnologia',
    'plans.table.row3.a': 'Propriedade da Kukai Solutions',
    'plans.table.row3.b': 'Propriedade da sua empresa',
    'plans.table.row4.label': 'Duração do projeto',
    'plans.table.row4.a': '1–3 meses',
    'plans.table.row4.b': 'Varia conforme a complexidade',
    'plans.table.row5.label': 'Propriedade do software',
    'plans.table.row5.a': 'Kukai é proprietária',
    'plans.table.row5.b': 'Sua empresa é proprietária',
    'plans.table.row6.label': 'Preço',
    'plans.table.row6.a': 'Baixo – Médio',
    'plans.table.row6.b': 'Médio – Alto',
    'plans.table.row7.label': 'Pagamento',
    'plans.table.row7.a': 'Taxa de desenvolvimento + assinatura mensal',
    'plans.table.row7.b': 'Taxa de desenvolvimento + taxa de entrega final',
    'plans.pricing.title': 'Preços',
    'plans.pricing.item1.label': 'Plano A – Desenvolvimento',
    'plans.pricing.item1.unit': 'por mês de desenvolvimento',
    'plans.pricing.item2.label': 'Plano B – Desenvolvimento',
    'plans.pricing.item2.unit': 'por mês de desenvolvimento',
    'plans.pricing.item3.label': 'Plano A – Assinatura',
    'plans.pricing.item3.unit': 'por mês',
    'plans.pricing.disclaimer': 'Os preços podem variar dependendo da complexidade do software e do número de desenvolvedores envolvidos.',

    // Contact
    'contact.title': 'Entre em contato',
    'contact.subtitle': 'Pronto para iniciar uma conversa?',
    'contact.button': 'Diga olá!',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
  },

  es: {
    // Navigation
    'nav.about': 'Nosotros',
    'nav.manifesto': 'Manifiesto',
    'nav.plans': 'Planes',
    'nav.contact': 'Contacto',
    'nav.techniques': 'Nuestras Técnicas',

    // Hero
    'hero.tagline': 'Soluciones de software para pequeñas empresas y sus complejidades únicas',
    'hero.subtitle':
      'Nos sumergimos en los problemas de su empresa para encontrar la solución más simple y efectiva.',
    'hero.cta': 'Saber más',

    // Techniques page
    'techniques.title': 'Nuestras Técnicas',
    'techniques.subtitle': 'Los métodos de ciencia de datos e ingeniería detrás de nuestro trabajo.',

    // Services
    'services.title': 'Servicios',
    'services.subtitle': 'Conectamos datos con decisiones.',
    'services.ml.title': 'Machine Learning & IA',
    'services.ml.description':
      'Desde modelos predictivos hasta IA generativa, construimos soluciones que aprenden de sus datos y automatizan decisiones a escala.',
    'services.nlp.title': 'Procesamiento de Lenguaje Natural',
    'services.nlp.description':
      'Extraiga valor de texto no estructurado. Desarrollamos embeddings, búsqueda vectorial, extracción de información y LLMs ajustados a su dominio.',
    'services.process.title': 'Optimización de Procesos',
    'services.process.description':
      'Rediseñamos flujos de trabajo cuantificando ineficiencias y transformando procesos lentos en sistemas ágiles orientados por datos.',
    'services.analytics.title': 'Analytics & Estrategia de Datos',
    'services.analytics.description':
      'Convierta datos brutos en insights accionables. Ayudamos a las organizaciones a construir una cultura de datos y tomar decisiones basadas en evidencia.',

    // About
    'about.title': 'Sobre nosotros',
    'about.p1':
      'Kukaisolutions es una consultora especializada que combina profunda experiencia matemática y computacional con experiencia práctica en la industria.',
    'about.p2':
      'Trabajamos en la intersección de la ciencia de datos, el machine learning y la estrategia empresarial—ayudando a las organizaciones a descubrir ineficiencias ocultas y transformarlas en resultados medibles.',
    'about.p3':
      'Nuestro equipo ha entregado soluciones en sectores como e-commerce, contabilidad y administración de salud. Aportamos el rigor de la investigación académica al ritmo de la industria.',
    'about.bullet1': 'Colaboración multifuncional con sus equipos',
    'about.bullet2':
      'Enfoque interdisciplinario que abarca estadística, ML y experiencia en el dominio',
    'about.bullet3': 'Desde proyectos piloto hasta sistemas en producción',
    'about.bullet4': 'Métodos transparentes, reproducibles y auditables',

    // Complexities
    'complexities.title': 'Complejidades de las Pequeñas Empresas',
    'complexities.intro': 'Los especialistas a menudo pasan por alto los pasos no triviales en sus propios flujos de trabajo. Nuestro objetivo es descubrir y abordar estas complejidades ocultas a través del software.',
    'complexities.item1.label': 'Falta de uniformidad',
    'complexities.item1.body': 'Diferentes empleados manejan los mismos procesos de manera distinta, produciendo resultados, costos y márgenes de beneficio inconsistentes.',
    'complexities.item2.label': 'Falta de transparencia',
    'complexities.item2.body': 'Los procesos están bien establecidos, pero no existe gobernanza, lo que impide tomar decisiones oportunas.',
    'complexities.item3.label': 'Falta de métricas',
    'complexities.item3.body': 'El equipo puede distinguir los buenos resultados de los malos, pero no hay una forma clara de medirlos.',
    'complexities.item4.label': 'Falta de estructura',
    'complexities.item4.body': 'Los resultados son claros, pero los procesos para alcanzarlos varían o no están bien definidos.',
    'complexities.item5.label': 'Tareas repetitivas o que consumen tiempo',
    'complexities.item5.body': 'Los esfuerzos del equipo se desperdician en tareas necesarias pero que no agregan valor al producto final.',
    'complexities.item6.label': 'Falta de gobernanza',
    'complexities.item6.body': '¿Dónde está ese archivo? ¿Por qué hay dos copias de esta hoja de cálculo? ¿Cuál es la versión más reciente?',
    'complexities.item7.label': 'Ruido en la toma de decisiones',
    'complexities.item7.body': 'Las decisiones basadas en los mismos hechos deben ser consistentes, independientemente de quién las tomó o cuándo.',

    // Manifesto
    'manifesto.title': 'Nuestro Manifiesto',
    'manifesto.intro': 'Profundizamos. Nos sumergimos en los problemas de su empresa con el objetivo de encontrar la solución más simple y efectiva.',
    'manifesto.value1.label': 'Asociación',
    'manifesto.value1.body': 'Somos técnicos, pero la mayoría de las veces no somos especialistas en su campo. Usted sabe dónde está el valor; nosotros sabemos cómo mejorar el rendimiento de los procesos, aumentar la confiabilidad y hacer su empresa más robusta y eficiente. Es un trabajo conjunto — nos complementamos.',
    'manifesto.value2.label': 'No trivialidad',
    'manifesto.value2.body': 'Lo que hace no es trivial — de lo contrario, ya habría encontrado un software que lo haga.',
    'manifesto.value3.label': 'Crecimiento',
    'manifesto.value3.body': 'Crecemos juntos.',
    'manifesto.value4.label': 'Aprendizaje',
    'manifesto.value4.body': 'Aprendemos juntos.',
    'manifesto.value5.label': 'Equidad y Compromiso',
    'manifesto.value5.body': 'Usted es una pequeña empresa, y nosotros también. No hay nada de malo en ser pequeño, pero debe tener claridad sobre sus objetivos y prioridades. Un proyecto de software es un compromiso de ambas partes. Como dice Dylan: "te dejaremos estar en nuestros sueños si podemos estar en los tuyos." No dudaremos en retirarnos de asociaciones vacilantes.',
    'manifesto.value6.label': 'Respeto',
    'manifesto.value6.body': 'Trabajamos <strong>con</strong> usted, no <strong>para</strong> usted.',
    'manifesto.value7.label': 'Honestidad',
    'manifesto.value7.body': 'Nos reservamos el derecho de decirle cuando creemos que está equivocado. Esperamos lo mismo de usted. Las conversaciones honestas son como encontramos el camino que aporta valor a su empresa — y, como subproducto, a Kukai también.',

    // Plans
    'plans.howwework.title': 'Cómo Trabajamos',
    'plans.howwework.subtitle': 'Soluciones de software pequeñas y enfocadas — listas para pruebas en 1 a 3 meses desde la concepción.',
    'plans.step1.title': 'Prospección',
    'plans.step1.body': 'Los desarrolladores y las partes interesadas del negocio se reúnen para comprender el problema y definir los objetivos principales.',
    'plans.step2.title': 'Modelado',
    'plans.step2.body': 'Juntos, mapeamos el problema y el flujo de valor del negocio.',
    'plans.step3.title': 'Desarrollo',
    'plans.step3.body': 'A través de ciclos iterativos, las partes interesadas y los desarrolladores construyen y prueban el producto, alcanzando un resultado utilizable por pasos incrementales.',
    'plans.collab.title': 'Modelos de Colaboración',
    'plans.plana.label': 'Plan A — Asociación:',
    'plans.plana.body': 'Desarrollamos software con mayor aplicabilidad. Usted paga una tarifa de desarrollo y una suscripción mensual. El software no es exclusivamente suyo y puede ofrecerse a otras empresas, incluidos competidores. Esta es la opción más económica.',
    'plans.planb.label': 'Plan B — Consultoría:',
    'plans.planb.body': 'Construimos una solución personalizada para su empresa. El código y la propiedad intelectual son suyos, entregados al final del proyecto. Usted es responsable del mantenimiento, la implementación y la infraestructura. Esta opción es más costosa.',
    'plans.table.header.plana': 'Plan A (Asociación)',
    'plans.table.header.planb': 'Plan B (Consultoría)',
    'plans.table.row1.label': 'Mantenimiento',
    'plans.table.row1.a': 'Responsabilidad de Kukai',
    'plans.table.row1.b': 'Responsabilidad de su empresa',
    'plans.table.row2.label': 'Infraestructura',
    'plans.table.row2.a': 'Responsabilidad de Kukai',
    'plans.table.row2.b': 'Responsabilidad de su empresa',
    'plans.table.row3.label': 'Tecnología',
    'plans.table.row3.a': 'Propiedad de Kukai Solutions',
    'plans.table.row3.b': 'Propiedad de su empresa',
    'plans.table.row4.label': 'Duración del proyecto',
    'plans.table.row4.a': '1–3 meses',
    'plans.table.row4.b': 'Varía según la complejidad',
    'plans.table.row5.label': 'Propiedad del software',
    'plans.table.row5.a': 'Kukai es propietaria',
    'plans.table.row5.b': 'Su empresa es propietaria',
    'plans.table.row6.label': 'Precio',
    'plans.table.row6.a': 'Bajo – Medio',
    'plans.table.row6.b': 'Medio – Alto',
    'plans.table.row7.label': 'Pago',
    'plans.table.row7.a': 'Tarifa de desarrollo + suscripción mensual',
    'plans.table.row7.b': 'Tarifa de desarrollo + tarifa de entrega final',
    'plans.pricing.title': 'Precios',
    'plans.pricing.item1.label': 'Plan A – Desarrollo',
    'plans.pricing.item1.unit': 'por mes de desarrollo',
    'plans.pricing.item2.label': 'Plan B – Desarrollo',
    'plans.pricing.item2.unit': 'por mes de desarrollo',
    'plans.pricing.item3.label': 'Plan A – Suscripción',
    'plans.pricing.item3.unit': 'por mes',
    'plans.pricing.disclaimer': 'Los precios pueden variar según la complejidad del software y el número de desarrolladores involucrados.',

    // Contact
    'contact.title': 'Contáctenos',
    'contact.subtitle': '¿Listo para iniciar una conversación?',
    'contact.button': '¡Saluda!',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof typeof ui[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

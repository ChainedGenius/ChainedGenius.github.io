const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://t.me/sharp_Y',
  title: 'Contact me',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Batyrzhan Iusup-Akhunov',
  role: 'Full stack analyst | Software developer | Mathematician',
  description:
    'Current Business Analyst at Tinkoff Russia and Software engineer at FRC CSC lab (RAS). 3+ years experience specializing in the software development for applied sciences and process automation. Also 2+ years experience as Control theory course instructor. Gigachad maths enjoyer who loves to interpret various processes in terms of mathematics. Interested in complex problems that require different approaches and interpretations when solving them. Willing to explore new existing methods and, if necessary, develop new approaches to solve the problems posed.',
  resume: 'https://github.com/ChainedGenius/Personal/blob/main/R%C3%A9sum%C3%A9.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/chainedgenius/',
    github: 'https://github.com/chainedgenius/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ECOMOD',
    description:
      'Scientific package for economic modeling written in python',
    stack: ['SymPy', 'Jinja', 'MikTeX', 'HyperNetX'],
    sourceCode: 'https://github.com/ChainedGenius/EcoMod'
  },
  {
    name: 'Analyst at Tinkoff Russia',
    description:
      'KPI measurement and business process design for customer service',
    stack: ['Python', 'SQL', 'BA', 'REST API', 'Kafka', 'Snowflake', 'Atlassian'],
  },
  {
    name: 'Optimal control course instructor (MIPT, Russia)',
    description:
      'Programming track for applied optimal control course at PSCAMS MIPT',
    stack: ['Optimal Control', 'Dynamic programming','PID','LQR', 'Q-learning', 'SymPy'],
    livePreview: 'https://ocm-mipt.notion.site/ocm-mipt/18fb0bcfa51c4c61b5ce37a830b1c203',
  },
  {
    name: 'Knowledge base population via unlabeled text corpora',
    description:
      'Fine=tuned algorithm of knowledge base population with LLM (BERT)',
    stack: ['NLP', 'Python'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Optimal Control',
  'SQL',
  'BA/BI',
  'ML',
  'System analysis and design'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'chainedgenius@gmail.com',
}

export { header, about, projects, skills, contact }

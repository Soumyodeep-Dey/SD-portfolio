import { useState } from 'react';
import { FaArrowRight, FaDev, FaPen } from 'react-icons/fa';

const myBlogs = [
  ['Troubleshooting RAG: Typical Issues and Easy Remedies', 'Understanding RAG issues, common failures, and simple remedies.', 'https://soumyodeep09.hashnode.dev/troubleshooting-rag-typical-issues-and-easy-remedies', '3 min read'],
  ['RAGs Explained: Your Simple Introduction', 'A practical introduction to retrieval-augmented generation systems.', 'https://soumyodeep09.hashnode.dev/rags-explained-your-simple-introduction', '5 min read'],
  ['Beginner’s Guide to Agentic AI with JavaScript', 'A practical approach to building intelligent agents with JavaScript.', 'https://soumyodeep09.hashnode.dev/beginners-guide-to-agentic-ai-with-javascript-a-practical-approach', '7 min read'],
  ['How to Turn a Non-Thinking Model into a Thinking Model', 'Techniques for designing more deliberate AI workflows.', 'https://soumyodeep09.hashnode.dev/how-to-turn-a-non-thinking-model-into-a-thinking-model-a-starters-guide', '5 min read'],
  ['System Prompts & Prompting Types', 'An intermediate guide to more purposeful prompt design.', 'https://soumyodeep09.hashnode.dev/elevate-your-skills-an-intermediate-users-guide-to-system-prompts-and-prompting-types', '8 min read'],
  ['Vector Embeddings: An Easy Explanation for Everyone', 'Making vector embeddings approachable and practical.', 'https://soumyodeep09.hashnode.dev/vector-embeddings-explained-for-beginners', '4 min read'],
  ['Tokenization 101: A Beginner’s Guide', 'How text is processed by AI models.', 'https://soumyodeep09.hashnode.dev/tokenization-explained-for-beginners', '2 min read'],
  ['How to Explain GPT to Young Kids', 'A simple, kid-friendly explanation of language models.', 'https://soumyodeep09.hashnode.dev/how-to-explain-gpt-to-young-kids', '3 min read'],
  ['BeautyMatch: A Privacy-First Chrome Extension for Skincare', 'Smart skincare verdicts on Amazon, Nykaa, and Sephora with zero tracking.', 'https://dev.to/soumyodeep_dey_c6cb5e8c97/beautymatch-smart-skin-compatibility-for-beauty-products-2fbg', '5 min read'],
  ['Step-by-Step Guide to Creating a ToDo App', 'Building a CRUD app with HTML, CSS, JavaScript, and local storage.', 'https://hashnode.com/post/cmas1h2tg000509lbe8flaetj', '8 min read'],
  ['A Beginner’s Guide to LinkedIn', 'Strategies for expanding your LinkedIn network.', 'https://hashnode.com/post/cm02l0eje000408mhbmv61h6f', '6 min read'],
];

const readingBlogs = [
  ['Mastering Git Commit Types: A Comprehensive Example in Convention', 'Tanmoy Ganguly', 'https://xanmoy.hashnode.dev/mastering-git-commit-types-a-comprehensive-example-in-convention', 'July 27, 2025'],
  ['Everything I know about good system design', 'sean goedecke', 'https://www.seangoedecke.com/good-system-design/?ref=dailydev', 'June 30, 2025'],
  ['Don’t Let Your Best Ideas Die in Silence', 'Arpit Bhayani', 'https://arpitbhayani.me/blogs/dont-let-your-best-ideas-die-in-silenc', 'June 5, 2025'],
  ['I Built an MCP Server for DevTo (100% Open Source)', 'Arindam Majumdar', 'https://dev.to/arindam_1729/i-built-an-mcp-server-for-devto-100-open-source-4f6n', 'June 3, 2025'],
];

function Blogs() {
  const [activeTab, setActiveTab] = useState('my-blogs');
  const isWriting = activeTab === 'my-blogs';
  const entries = isWriting ? myBlogs : readingBlogs;
  return <main className="writing-page">
    <header className="writing-hero"><p className="eyebrow">Notes from the workbench</p><h1>Writing about AI systems and software craft.</h1><p>Practical explainers, project notes, and the ideas I’m learning from as I build.</p></header>
    <section className="writing-content" aria-labelledby="writing-heading">
      <div className="writing-topline"><div><p className="eyebrow">{isWriting ? 'Published writing' : 'Reading list'}</p><h2 id="writing-heading">{isWriting ? 'Articles I’ve written.' : 'Ideas I’m exploring.'}</h2></div><nav className="writing-tabs" aria-label="Writing category"><button type="button" className={isWriting ? 'active' : ''} onClick={() => setActiveTab('my-blogs')}>My articles</button><button type="button" className={!isWriting ? 'active' : ''} onClick={() => setActiveTab('reading-list')}>Reading list</button></nav></div>
      <div className="writing-grid">{entries.map(([title, detail, link, meta]) => <article className="writing-card" key={link}><p className="project-type">{meta}</p><h3>{title}</h3><p>{isWriting ? detail : `By ${detail}`}</p><a href={link} target="_blank" rel="noreferrer">{isWriting ? 'Read article' : 'Open article'} <FaArrowRight /></a></article>)}</div>
    </section>
    <section className="writing-follow"><p className="eyebrow">Keep in touch</p><h2>Follow the ongoing learning journey.</h2><div className="hero-actions"><a className="button button-primary" href="https://dev.to/soumyodeep_dey_c6cb5e8c97" target="_blank" rel="noreferrer"><FaDev /> Dev.to</a><a className="button button-secondary" href="https://hashnode.com/@Soumyodeep09" target="_blank" rel="noreferrer"><FaPen /> Hashnode</a></div></section>
  </main>;
}

export default Blogs;

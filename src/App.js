import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import Hero from './hero';
import Info from './info';
import Feature from './feature';
import Footer from './footer';
import Social from './social';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");

  // Function to handle formatting
  const handleFormatting = (format) => {
    switch (format) {
      case 'heading':
        setMarkdown('# ' + markdown);
        break;
      case 'bold':
        setMarkdown('**' + markdown + '**');
        break;
      case 'italic':
        setMarkdown('*' + markdown + '*');
        break;
      case 'link':
        setMarkdown(markdown + '\n[Link Text](https://example.com)');
        break;
      case 'image':
        setMarkdown(markdown + '\n![Alt Text](https://example.com/image.jpg)');
        break;
      case 'code':
        setMarkdown(markdown + '\n```\n// Your code here\n```');
        break;
      default:
        break;
    }
  };

  return (
    <main className="Main">
      <Hero />
      <Info />
      <div className='toolbar'>
          {/* Define the toolbar buttons */}
          <button class="btn" onClick={() => handleFormatting('heading')}><i class="fa-solid fa-heading"></i></button>
          <button class="btn" onClick={() => handleFormatting('bold')}><i class="fa-solid fa-bold"></i></button>
          <button class="btn" onClick={() => handleFormatting('italic')}><i class="fa-solid fa-italic"></i></button>
          <button class="btn" onClick={() => handleFormatting('link')}><i class="fa-solid fa-link"></i></button>
          <button class="btn" onClick={() => handleFormatting('image')}><i class="fa-regular fa-image"></i></button>
          <button class="btn" onClick={() => handleFormatting('code')}><i class="fa-solid fa-code"></i></button>
        </div>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
      <Feature />
      <img className='Vectors' src='./vectors.jpg' alt='Vectors' />
      <Footer />
      <Social />
    </main>
  );
}

export default App;

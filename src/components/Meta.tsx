import { useEffect } from 'react';

export default function Meta({
  title,
  description = '',
}: { title: string; description?: string }) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: 'Prince Kumar Prajapati, Software Engineer, Full-Stack Developer, Portfolio, React Developer, GitHub Projects, AI Developer, Blockchain Developer, Machine Learning Engineer, Prince' },
      { name: 'author', content: 'Prince Kumar Prajapati' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://yourwebsite.vercel.app/' }, // Replace with your actual URL
      { property: 'og:image', content: 'https://yourwebsite.vercel.app/og-image.png' }, // Replace with your actual image URL
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://yourwebsite.vercel.app/og-image.png' }, // Replace with your actual image URL
    ];

    metaTags.forEach(({ name, property, content }) => {
      const existingMeta = document.querySelector(
        name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      );
      if (existingMeta) {
        existingMeta.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        if (name) newMeta.name = name;
        if (property) newMeta.setAttribute('property', property);
        newMeta.content = content;
        document.head.appendChild(newMeta);
      }
    });
  }, [title, description]);

  return null;
}

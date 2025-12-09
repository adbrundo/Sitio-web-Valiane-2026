import { useEffect } from 'react';

export function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Reload Instagram embeds if script already loaded
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/valianevalkyria/"
        data-instgrm-version="14"
      >
        <a href="https://www.instagram.com/valianevalkyria/">
          View this profile on Instagram
        </a>
      </blockquote>
    </div>
  );
}

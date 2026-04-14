import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig, squooshImageService } from 'astro/config';

export default defineConfig({
  integrations: [
    tailwind(),
    icon({ include: { mdi: ['*'] } }),
  ],
  image: {
    service: squooshImageService(),
  },
  site: 'https://kukaisolutions.github.io',
  base: '/',
});

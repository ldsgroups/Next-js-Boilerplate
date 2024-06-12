// vitest.config.mts
import react from 'file:///C:/Users/dariu/Documents/Projects/menu-cool/node_modules/@vitejs/plugin-react/dist/index.mjs';
import { loadEnv } from 'file:///C:/Users/dariu/Documents/Projects/menu-cool/node_modules/vite/dist/node/index.js';
import tsconfigPaths from 'file:///C:/Users/dariu/Documents/Projects/menu-cool/node_modules/vite-tsconfig-paths/dist/index.mjs';
import { defineConfig } from 'file:///C:/Users/dariu/Documents/Projects/menu-cool/node_modules/vitest/dist/config.js';

const vitest_config_default = defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    // This is needed by @testing-library to be cleaned up after each test
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.{js,jsx,ts,tsx}', '**/*.d.ts'],
      reporter: ['html'],
    },
    environmentMatchGlobs: [['**/*.test.tsx', 'jsdom']],
    setupFiles: ['./vitest-setup.ts'],
    env: loadEnv('', process.cwd(), ''),
  },
});
export { vitest_config_default as default };
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkYXJpdVxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcbWVudS1jb29sXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkYXJpdVxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcbWVudS1jb29sXFxcXHZpdGVzdC5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9kYXJpdS9Eb2N1bWVudHMvUHJvamVjdHMvbWVudS1jb29sL3ZpdGVzdC5jb25maWcubXRzXCI7LyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IGxvYWRFbnYgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgdHNjb25maWdQYXRocygpXSxcclxuICB0ZXN0OiB7XHJcbiAgICBnbG9iYWxzOiB0cnVlLCAvLyBUaGlzIGlzIG5lZWRlZCBieSBAdGVzdGluZy1saWJyYXJ5IHRvIGJlIGNsZWFuZWQgdXAgYWZ0ZXIgZWFjaCB0ZXN0XHJcbiAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnRlc3Que2pzLGpzeCx0cyx0c3h9J10sXHJcbiAgICBjb3ZlcmFnZToge1xyXG4gICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qJ10sXHJcbiAgICAgIGV4Y2x1ZGU6IFsnc3JjLyoqLyouc3Rvcmllcy57anMsanN4LHRzLHRzeH0nLCAnKiovKi5kLnRzJ10sXHJcbiAgICAgIHJlcG9ydGVyOiBbJ2h0bWwnXSxcclxuICAgIH0sXHJcbiAgICBlbnZpcm9ubWVudE1hdGNoR2xvYnM6IFtbJyoqLyoudGVzdC50c3gnLCAnanNkb20nXV0sXHJcbiAgICBzZXR1cEZpbGVzOiBbJy4vdml0ZXN0LXNldHVwLnRzJ10sXHJcbiAgICBlbnY6IGxvYWRFbnYoJycsIHByb2Nlc3MuY3dkKCksICcnKSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyxvQkFBb0I7QUFFN0IsSUFBTyx3QkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7QUFBQSxFQUNsQyxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUE7QUFBQSxJQUNULFNBQVMsQ0FBQywrQkFBK0I7QUFBQSxJQUN6QyxVQUFVO0FBQUEsTUFDUixTQUFTLENBQUMsVUFBVTtBQUFBLE1BQ3BCLFNBQVMsQ0FBQyxvQ0FBb0MsV0FBVztBQUFBLE1BQ3pELFVBQVUsQ0FBQyxNQUFNO0FBQUEsSUFDbkI7QUFBQSxJQUNBLHVCQUF1QixDQUFDLENBQUMsaUJBQWlCLE9BQU8sQ0FBQztBQUFBLElBQ2xELFlBQVksQ0FBQyxtQkFBbUI7QUFBQSxJQUNoQyxLQUFLLFFBQVEsSUFBSSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQUEsRUFDcEM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

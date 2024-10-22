// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript'; // Import the TypeScript plugin
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/bundle-entry.ts', // Update the input file
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'Libraries',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }), // Add the TypeScript plugin
    terser(),
  ],
};

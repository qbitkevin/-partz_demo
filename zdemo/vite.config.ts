
import { defineConfig }     from 'vite';
import react                from '@vitejs/plugin-react';

export default defineConfig( {
    plugins: [
        react()
    ],
    mode: 'development', // < this is important
    build: {
        minify: false,
        sourcemap: true // < this allows the browser to point you to the correct file
    }
   // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             // example : additionalData: `@import "./src/design/styles/variables";`
    //             // dont need include file extend .scss
    //             additionalData: `@import "@partz/styling/dist/rz-ux-page.css";`
    //         },
    //     },
    // },

} );


// See:
// https://vitejs.dev/config/

// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				// Указываем путь для копирования изображений в папку "dist/images"
				assetFileNames: 'images/[name].[ext]',
			},
		},
	},
})

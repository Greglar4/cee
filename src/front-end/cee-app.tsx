import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Cee } from './cee'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Cee />
	</StrictMode>,
)

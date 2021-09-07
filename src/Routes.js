
import Accueil from './components/Accueil'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Page7 from './components/Page7'
import Post from './components/Post'
import Pays from './components/planificateur_voyage/Pays'
import Pays2 from './components/planificateur_voyage/Pays2'
import Pays3 from './components/planificateur_voyage/Pays3'

export default [
	{path: '/', component: Accueil},
	{path: '/page1', component: Page1},
	{path: '/page2/', component: Page2},
	{path: '/page3/', component: Page3},
	{path: '/page4/', component: Page4},
	{path: '/page5/:valeur', component: Page5},
	{path: '/page6/:jour', component: Page6},
	{path: '/page7/', component: Page7},
	{path: '/blogpost/:id', component: Post},
	{path: '/pays/', component: Pays},
	{path: '/pays2/', component: Pays2},
	{path: '/pays3/', component: Pays3}
]

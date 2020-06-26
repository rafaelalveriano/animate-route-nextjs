import { LayoutSite ,Animation} from '../components/Site/Share'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/animation.css'

export default ({ Component, pageProps }) => {
  return (
   <Animation>
      <LayoutSite>
      <Component {...pageProps} />
    </LayoutSite>
   </Animation>
  )
}
import { useRouter } from 'next/router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default ({ children }) => {
  const router = useRouter()

  return (
    <TransitionGroup>
      <CSSTransition key={router.route} classNames='transition' timeout={900}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}
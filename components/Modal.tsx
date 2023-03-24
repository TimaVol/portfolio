import { useCallback, useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import { CSSTransition } from "react-transition-group"

interface Props {
  children?: React.ReactNode
  isOpen: boolean
  closeHandler: () => void
  className?: string
}

export default function Modal({
  children,
  isOpen,
  closeHandler,
  className,
}: Props) {
  const modalRef = useRef(null)

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeHandler()
      }
    },
    [closeHandler]
  )

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false)

    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [escFunction])

  return (
    <CSSTransition
      nodeRef={modalRef}
      in={isOpen}
      timeout={800}
      classNames="overlay transition"
      unmountOnExit
    >
      <>
        {ReactDOM.createPortal(
          <div ref={modalRef} onClick={closeHandler}>
            <div
              className={`modal ${className}`}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
      </>
    </CSSTransition>
  )
}

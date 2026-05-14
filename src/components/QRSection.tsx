import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { QRCode } from 'react-qr-code'

interface QRSectionProps {
  url: string
  accentColor: string
}

function computeFullscreenQrSize(): number {
  if (typeof window === 'undefined') return 280
  const margin = 96
  const cap = Math.min(window.innerWidth, window.innerHeight) - margin
  return Math.max(200, Math.min(cap, 520))
}

export function QRSection({ url, accentColor }: QRSectionProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalQrSize, setModalQrSize] = useState(280)
  const titleId = useId()

  const close = useCallback(() => setModalOpen(false), [])

  useEffect(() => {
    if (!modalOpen) return

    const updateSize = () => setModalQrSize(computeFullscreenQrSize())
    updateSize()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('resize', updateSize)
    window.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('resize', updateSize)
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [modalOpen, close])

  const overlay =
    modalOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[300]"
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <span id={titleId} className="sr-only">
          QR Code ampliado
        </span>
        <button
          type="button"
          className="absolute inset-0 bg-zinc-950/92 backdrop-blur-md"
          onClick={close}
          aria-label="Fechar (toque fora)"
        />
        <div className="relative flex h-[100dvh] min-h-0 flex-col pointer-events-none">
          <div className="flex shrink-0 justify-end px-3 pb-1 pt-2 pointer-events-auto sm:px-4 sm:pt-3">
            <button
              type="button"
              onClick={close}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl font-light leading-none text-white shadow-lg ring-1 ring-white/20 transition hover:bg-white/25 active:scale-95"
              aria-label="Fechar QR Code"
            >
              ×
            </button>
          </div>
          <div className="pointer-events-none flex min-h-0 flex-1 items-center justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <div
              className="pointer-events-auto relative z-10 rounded-3xl bg-white p-4 shadow-2xl sm:p-6"
              style={{ boxShadow: `0 24px 80px ${accentColor}44` }}
            >
              <QRCode value={url} size={modalQrSize} level="M" />
            </div>
          </div>
        </div>
      </div>,
      document.body,
    )

  return (
    <>
      <div className="mt-8 flex flex-col items-center gap-3">
        <p className="text-xs font-medium uppercase tracking-wider text-white/70">QR desta página</p>
        <p className="text-[11px] text-white/45">Toque no código para ampliar</p>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="rounded-2xl bg-white p-3 shadow-lg shadow-black/25 transition hover:scale-[1.02] active:scale-[0.98]"
          style={{ boxShadow: `0 12px 40px ${accentColor}33` }}
          aria-label="Ampliar QR Code"
        >
          <QRCode value={url} size={132} level="M" />
        </button>
      </div>
      {overlay}
    </>
  )
}

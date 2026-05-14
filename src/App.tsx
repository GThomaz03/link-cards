import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { INTERNAL_PROFILES_CATALOG_PATH } from './config/internalRoutes'
import { ProfileSkeleton } from './components/ProfileSkeleton'
import { AdminPage } from './pages/AdminPage'
import { InternalProfilesCatalogPage } from './pages/InternalProfilesCatalogPage'
import { RootPage } from './pages/RootPage'

const ProfilePage = lazy(() => import('./pages/ProfilePage'))

const router = createBrowserRouter([
  { path: '/', element: <RootPage /> },
  { path: '/admin', element: <AdminPage /> },
  { path: INTERNAL_PROFILES_CATALOG_PATH, element: <InternalProfilesCatalogPage /> },
  {
    path: '/:slug',
    element: (
      <Suspense
        fallback={
          <div className="min-h-svh bg-zinc-950">
            <ProfileSkeleton />
          </div>
        }
      >
        <ProfilePage />
      </Suspense>
    ),
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="top-center" />
    </>
  )
}

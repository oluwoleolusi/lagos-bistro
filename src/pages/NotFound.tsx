import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">This table isn’t set.</h1>
      <p className="mt-4 max-w-[42ch] text-[1.05rem] leading-relaxed text-ink-soft">
        The page you’re looking for doesn’t exist, or has moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to the home page
      </Link>
    </section>
  )
}

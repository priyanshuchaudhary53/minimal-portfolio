export default function SectionWrapper({ children, id, title, description, showTitle = true }) {
  return (
    <section {...(id && { id })} className="scroll-mt-4">
      {title && (
        showTitle ? (
          <div className="px-2 max-sm:px-4 line-y">
            <h2 className="text-cyan-500 font-mono text-sm font-semibold tracking-widest uppercase sm:text-xs">
              {title}
            </h2>
          </div>
        ) : (
          <h2 className="sr-only">{title}</h2>
        )
      )}
      {description && (
        <div className="mt-4 px-2 max-sm:px-4 line-y">
          <p className="text-gray-600 text-base/7">{description}</p>
        </div>
      )}
      {children}
    </section>
  )
}
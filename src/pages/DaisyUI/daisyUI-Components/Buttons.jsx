

function Button() {

  return (
    <>
      <div className="flex gap-3 p-3 bg-base-300">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-accent">Accent</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-error">Error</button>
      </div>

      <div className="flex gap-3 p-3 bg-base-300">
        <button class="btn btn-outline">Default</button>
        <button class="btn btn-primary btn-outline">Primary</button>
        <button class="btn btn-secondary btn-outline">Secondary</button>
      </div>

      <div className="flex gap-3 p-3 bg-base-300">
        <button class="btn btn-ghost">Ghost</button>
      </div>

      <div className="flex gap-3 p-3 bg-base-300">
        <button class="btn btn-link">Link</button>
      </div>

      <div className="flex gap-3 p-3 bg-base-300">
        <button class="btn btn-lg">Large</button>
        <button class="btn">Normal</button>
        <button class="btn btn-sm">Small</button>
        <button class="btn btn-xs">Extra Small</button>
      </div>

      <div className="flex gap-3 p-3 bg-base-300">
        <button class="btn btn-primary btn-wide">Wide Button</button>
      </div>

      <div className="flex gap-3 p-3 bg-base-300">
        <button class="btn btn-primary btn-block">Full Width</button>
      </div>

      <div className="flex gap-3 p-3 bg-base-300">
        <button class="btn btn-primary" disabled>Disabled</button>
      </div>

      <div className="flex gap-3 p-3 bg-base-300">
        <button class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M5 12h14" />
          </svg>
          Button
        </button>
      </div>
    </>
  )
}

export default Button

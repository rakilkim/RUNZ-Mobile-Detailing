import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-slate-100 text-slate-900">
    <header class="sticky top-0 z-10 bg-slate-950 text-white">
      <div class="mx-auto flex w-[min(1080px,92vw)] flex-wrap items-center justify-between gap-4 py-4">
        <p class="m-0 text-sm font-bold tracking-[0.2em] sm:text-base">RUNZ Mobile Detailing</p>
        <nav class="flex flex-wrap gap-4 text-sm font-semibold sm:text-base">
          <a class="text-white no-underline hover:text-amber-300" href="#services">Services</a>
          <a class="text-white no-underline hover:text-amber-300" href="#packages">Packages</a>
          <a class="text-white no-underline hover:text-amber-300" href="#contact">Book Now</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="bg-gradient-to-br from-slate-950 to-blue-900 py-20 text-white">
        <div class="mx-auto w-[min(1080px,92vw)] max-w-3xl">
          <p class="mb-2 text-xs tracking-[0.15em] uppercase sm:text-sm">Premium Car Care · We Come To You</p>
          <h1 class="mb-4 text-4xl leading-tight font-bold sm:text-6xl">Showroom Shine Without Leaving Home</h1>
          <p class="max-w-2xl text-white/90 sm:text-lg">
            RUNZ Mobile Detailing delivers professional interior and exterior detailing
            for cars, trucks, and SUVs across your area.
          </p>
          <a
            class="mt-6 inline-block rounded-md bg-amber-300 px-5 py-3 text-sm font-bold text-slate-950 no-underline hover:bg-amber-200 sm:text-base"
            href="#contact"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <section id="services" class="py-14">
        <div class="mx-auto w-[min(1080px,92vw)]">
          <h2 class="mb-6 text-3xl font-bold">Detailing Services</h2>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 class="mb-2 text-xl font-semibold">Exterior Detail</h3>
              <p class="text-slate-700">Foam wash, clay bar, wheel cleaning, wax protection, and hand dry.</p>
            </article>
            <article class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 class="mb-2 text-xl font-semibold">Interior Detail</h3>
              <p class="text-slate-700">Deep vacuum, steam clean, stain treatment, and UV protectant finish.</p>
            </article>
            <article class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 class="mb-2 text-xl font-semibold">Full Detail</h3>
              <p class="text-slate-700">Complete interior + exterior restoration to refresh your entire vehicle.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="packages" class="bg-slate-200/60 py-14">
        <div class="mx-auto w-[min(1080px,92vw)]">
          <h2 class="mb-6 text-3xl font-bold">Popular Packages</h2>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 class="text-xl font-semibold">Express Clean</h3>
              <p class="my-2 text-2xl font-extrabold">$89+</p>
              <p class="text-slate-700">Quick refresh for weekly maintenance and light dust removal.</p>
            </article>
            <article class="rounded-xl border border-blue-700 bg-white p-5 shadow-lg shadow-blue-900/10">
              <h3 class="text-xl font-semibold">Signature Detail</h3>
              <p class="my-2 text-2xl font-extrabold">$179+</p>
              <p class="text-slate-700">Our most requested package with deep interior and exterior care.</p>
            </article>
            <article class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 class="text-xl font-semibold">Ultimate Protection</h3>
              <p class="my-2 text-2xl font-extrabold">$279+</p>
              <p class="text-slate-700">Includes paint sealant and premium interior conditioning.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="py-14">
        <div class="mx-auto w-[min(1080px,92vw)] text-center">
          <h2 class="mb-3 text-3xl font-bold">Ready to Book?</h2>
          <p class="mb-2 text-slate-700 sm:text-lg">
            Call or text <a class="font-semibold text-blue-700" href="tel:+15551234567">(555) 123-4567</a> · Open 7 days a week
          </p>
          <p class="text-slate-700 sm:text-lg">
            Email: <a class="font-semibold text-blue-700" href="mailto:hello@runzdetailing.com">hello@runzdetailing.com</a>
          </p>
        </div>
      </section>
    </main>
  </div>
`

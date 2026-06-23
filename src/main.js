import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-slate-100 text-black">
    <header class="sticky top-0 z-10 bg-slate-950 text-white">
      <div class="mx-auto flex w-[min(1080px,92vw)] flex-wrap items-center justify-between gap-4 py-4">
        <p class="m-0 text-sm font-extrabold italic tracking-[0.2em] sm:text-base">
          <span class="text-title">RUNZ</span> Mobile Detailing
        </p>
        <nav class="flex flex-wrap gap-4 text-sm font-semibold sm:text-base">
          <a class="text-white no-underline hover:text-amber-300" href="#packages">Packages</a>
          <a class="text-white no-underline hover:text-amber-300" href="#contact">Book Now</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="relative py-20 bg-cover bg-center bg-no-repeat text-white"
        style="background-image: url('/bmw-f10-m5-custom-widebody-realistic-photo-black-car-with-dark-background-rain_1305056-119766.avif')">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative mx-auto w-[min(1080px,92vw)] max-w-3xl">
          <p class="mb-2 text-xs tracking-[0.15em] uppercase sm:text-sm">Mobile Service · We Come To You</p>
          <h1 class="mb-4 text-4xl leading-tight font-bold sm:text-6xl">Clean. Protect. Shine.</h1>
          <p class="max-w-2xl text-white/90 sm:text-lg">
            <span class="text-title">RUNZ</span> Mobile Detailing delivers professional interior and exterior detailing
            for cars, trucks, and SUVs across your area.
          </p>
          <a
            class="mt-6 inline-block rounded-md bg-amber-300 px-5 py-3 text-sm font-bold text-slate-950 no-underline hover:bg-amber-200 sm:text-base"
            href="#contact"
          >
            View Our Packages
          </a>
        </div>
      </section>
<div class="mx-auto w-[min(1080px,92vw)]">
  <div class="flex flex-col lg:flex-row gap-8">
    <section id="services" class="pt-14 flex-1">
      <h2 class="mb-6 text-3xl font-bold">Why Choose <span class="text-title">RUNZ</span>?</h2>
      <ul class="flex flex-col gap-3">
        <li class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <h3 class="mb-2 text-2xl font-semibold">Convenient Mobile Service</h3>
          <p class="text-slate-700">We come to you, saving you time and effort.</p>
        </li>
        <li class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <h3 class="mb-2 text-2xl font-semibold">Filtered Water</h3>
          <p class="text-slate-700">Filtered water for spot-free results.</p>
        </li>
        <li class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <h3 class="mb-2 text-2xl font-semibold">Quality Products</h3>
          <p class="text-slate-700">Professional equipment and products.</p>
        </li>
        <li class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <h3 class="mb-2 text-2xl font-semibold">Safe for All Surfaces</h3>
          <p class="text-slate-700">Safe for paint, interior, leather, and vinyl.</p>
        </li>
        <li class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <h3 class="mb-2 text-2xl font-semibold">Guaranteed Satisfaction</h3>
          <p class="text-slate-700">50+ five-star reviews on yelp.</p>
        </li>
      </ul>
    </section>
    <section id="addons" class="py-14 flex-1">
      <h2 class="mb-6 text-3xl font-bold">Add-on Services</h2>
      <ul class="flex flex-col gap-3">
        <li class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <h3 class=" text-xl font-semibold">Pet Hair Removal</h3>
        </li>
        <li class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <h3 class=" text-xl font-semibold">Seat Extraction</h3>
        </li>
        <li class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <h3 class=" text-xl font-semibold">Odor Removal</h3>
        </li>
        <li class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <h3 class=" text-xl font-semibold">Interior Protection</h3>
        </li>
      </ul>
    </section>

  </div>
</div>
<section id="packages" class="bg-slate-200/60 py-14 mt-7">
  <div class="mx-auto w-[min(1080px,92vw)]">
    <h2 class="mb-6 text-3xl font-bold">Packages</h2>
    <div class=" gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

      <!-- Package 1 -->
      <article class="flex flex-col rounded-xl border border-green-400 bg-white p-5 shadow-sm">
        <h3 class="text-xl font-semibold"><span class="text-title">RUNZ</span> Maintenance Package</h3>
        <p class="my-2 text-2xl font-extrabold">$85+</p>
        <p class="text-slate-700">Perfect for routine vehicle upkeep and protection.</p>

        <details class="mt-4 flex flex-col group">
          <summary class="cursor-pointer text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 list-none">
            <span>See details</span>
            <span class="transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div class="mt-3 space-y-3 text-sm text-slate-700">
            <div>
              <p class="font-semibold mb-1">Pricing by vehicle</p>
              <ul class="space-y-1">
                <li class="flex justify-between"><span>Sedan / Coupe</span><span class="font-bold">$85</span></li>
                <li class="flex justify-between"><span>SUV / Truck</span><span class="font-bold">$95</span></li>
                <li class="flex justify-between"><span>Large SUV / Van</span><span class="font-bold">$110</span></li>
              </ul>
            </div>
            <div>
              <p class="font-semibold mb-1">What's included</p>
              <ul class="space-y-1 list-disc list-inside">
                <li>Exterior Foam hand wash(Filtered Water)</li>
                <li>Spray Sealant Paint Protection</li>
                <li>Wheel Cleaning</li>
                <li>Tire Dressing</li>
                <li>Interior Vacuum</li>
                <li>Interior Wipe Down</li>
                <li>Clean Windows & Door Panels</li>
              </ul>
            </div>
          </div>
          <div class="flex justify-center mt-4 text-lg font-semibold">
            <div>Estimated Time: 1 Hour</div>
          </div>
        </details>
      </article>

      <!-- Package 2 -->
      <article class="flex flex-col rounded-xl border border-blue-700 bg-white p-5 shadow-lg shadow-blue-900/10">
        <h3 class="text-xl font-semibold"><span class="text-title">RUNZ</span> Platinum Detail</h3>
        <div class="mb-2 flex items-center gap-2">
          <p class="mt-2 text-2xl font-extrabold">$225+</p>
          <div class="flex mt-2 items-center gap-1">
            <span class="text-xl text-blue-700">&#9733;</span>
            <h4 class="text-lg font-bold">Most Popular</h4>
          </div>
        </div>
        <p class="text-slate-700">Deep interior cleaning and stain removal for a refreshed, like-new feel.</p>

        <details class="mt-4 group">
          <summary class="cursor-pointer text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 list-none">
            <span>See details</span>
            <span class="transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div class="mt-3 space-y-3 text-sm text-slate-700">
            <div>
              <p class="font-semibold mb-1">Pricing by vehicle</p>
              <ul class="space-y-1">
                <li class="flex justify-between"><span>Sedan / Coupe</span><span class="font-bold">$225</span></li>
                <li class="flex justify-between"><span>SUV / Truck</span><span class="font-bold">$250</span></li>
                <li class="flex justify-between"><span>Large SUV / Van</span><span class="font-bold">$275</span></li>
              </ul>
            </div>
            <div>
              <p class="font-semibold mb-1">What's included</p>
              <ul class="space-y-1 list-disc list-inside">
                <li>Exterior Foam Hand Wash (Filtered Water)</li>
                <li>Spray Sealant Paint Protection</li>
                <li>Wheel Cleaning</li>
                <li>Tire Dressing</li>
                <li>Interior Vacuum</li>
                <li>Full Interior Steam Cleaning</li>
                <li>Interior Wipe Down</li>
                <li>Clean Windows & Door Panels</li>
                <li>Heated Extraction for Carpets & Seats</li>
                <li>Deep Cleaning & Stain Removal</li>
                <li>Dashboard & Console Cleaning</li>
                <li>Leather & Vinyl UV Protection Dressing</li>
              </ul>
            </div>
          </div>
                    <div class="flex justify-center mt-4 text-lg font-semibold">
            <div>Estimated Time: 3 Hour</div>
          </div>
        </details>
      </article>

      <!-- Package 3 -->
      <article class="flex flex-col rounded-xl border border-red-500 bg-white p-5 shadow-sm">
        <h3 class="text-xl font-semibold"><span class="text-title">RUNZ</span> Ultimate Detail</h3>
        <p class="my-2 text-2xl font-extrabold">$275+</p>
        <p class="text-slate-700">Our most comprehensive package featuring full interior restoration and paint decoration.</p>

        <details class="mt-4 group">
          <summary class="cursor-pointer text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 list-none">
            <span>See details</span>
            <span class="transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div class="mt-3 space-y-3 text-sm text-slate-700">
            <div>
              <p class="font-semibold mb-1">Pricing by vehicle</p>
              <ul class="space-y-1">
                <li class="flex justify-between"><span>Sedan / Coupe</span><span class="font-bold">$275</span></li>
                <li class="flex justify-between"><span>SUV / Truck</span><span class="font-bold">$300</span></li>
                <li class="flex justify-between"><span>Large SUV / Van</span><span class="font-bold">$325</span></li>
              </ul>
            </div>
            <div>
              <p class="font-semibold mb-1">What's included</p>
              <ul class="space-y-1 list-disc list-inside">
                <li>Exterior Foam Hand Wash (Filtered Water)</li>
                <li>Spray Sealant Paint Protection</li>
                <li>Iron Remover Treatment</li>
                <li>Clay Mitt Paint Decontamination</li>
                <li>Wheel Cleaning</li>
                <li>Tire Dressing</li>
                <li>Interior Vacuum</li>
                <li>Full Interior Steam Cleaning</li>
                <li>Interior Wipe Down</li>
                <li>Clean Windows & Door Panels</li>
                <li>Heated Extraction for Carpets & Seats</li>
                <li>Deep Cleaning & Stain Removal</li>
                <li>Dashboard & Console Cleaning</li>
                <li>Leather & Vinyl UV Protection Dressing</li>
              </ul>
            </div>
          </div>
                    <div class="flex justify-center mt-4 text-lg font-semibold">
            <div>Estimated Time: 3.5 - 4 Hours</div>
          </div>
        </details>
      </article>

    </div>
  </div>
</section>

      <section id="contact" class="py-14">
        <div class="mx-auto w-[min(1080px,92vw)] text-center">
          <h2 class="mb-3 text-3xl font-bold">Ready to Book?</h2>
          <p class="mb-2 text-slate-700 sm:text-lg">
            Call or text <a class="font-semibold text-blue-700" href="tel:+14244099548">(424) 409-9548</a> · Open 7 days a week
          </p>
        </div>
      </section>
    </main>
  </div>
`

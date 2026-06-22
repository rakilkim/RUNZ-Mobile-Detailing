import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container nav-wrap">
      <p class="brand">RUNZ Mobile Detailing</p>
      <nav>
        <a href="#services">Services</a>
        <a href="#packages">Packages</a>
        <a href="#contact">Book Now</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-content">
        <p class="eyebrow">Premium Car Care · We Come To You</p>
        <h1>Showroom Shine Without Leaving Home</h1>
        <p>
          RUNZ Mobile Detailing delivers professional interior and exterior detailing
          for cars, trucks, and SUVs across your area.
        </p>
        <a class="cta" href="#contact">Get a Free Quote</a>
      </div>
    </section>

    <section id="services" class="section">
      <div class="container">
        <h2>Detailing Services</h2>
        <div class="grid">
          <article class="card">
            <h3>Exterior Detail</h3>
            <p>Foam wash, clay bar, wheel cleaning, wax protection, and hand dry.</p>
          </article>
          <article class="card">
            <h3>Interior Detail</h3>
            <p>Deep vacuum, steam clean, stain treatment, and UV protectant finish.</p>
          </article>
          <article class="card">
            <h3>Full Detail</h3>
            <p>Complete interior + exterior restoration to refresh your entire vehicle.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="packages" class="section alt">
      <div class="container">
        <h2>Popular Packages</h2>
        <div class="grid">
          <article class="card package">
            <h3>Express Clean</h3>
            <p class="price">$89+</p>
            <p>Quick refresh for weekly maintenance and light dust removal.</p>
          </article>
          <article class="card package featured">
            <h3>Signature Detail</h3>
            <p class="price">$179+</p>
            <p>Our most requested package with deep interior and exterior care.</p>
          </article>
          <article class="card package">
            <h3>Ultimate Protection</h3>
            <p class="price">$279+</p>
            <p>Includes paint sealant and premium interior conditioning.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container contact">
        <h2>Ready to Book?</h2>
        <p>Call or text <a href="tel:+15551234567">(555) 123-4567</a> · Open 7 days a week</p>
        <p>Email: <a href="mailto:hello@runzdetailing.com">hello@runzdetailing.com</a></p>
      </div>
    </section>
  </main>
`

"use client";

import { useState } from "react";
import {
  ArrowDownLeft, ArrowLeft, ArrowUpLeft, Check, Instagram, Menu, MessageCircle,
  PenTool, Play, Send, Sparkles, Target, TrendingUp, X
} from "lucide-react";

const services = [
  { number: "01", icon: TrendingUp, title: "مدیریت پیج", text: "برنامه‌ریزی، نظم انتشار و مدیریت روزانه پیج با تمرکز بر هدف کسب‌وکار شما." },
  { number: "02", icon: PenTool, title: "تولید محتوا", text: "محتوای تصویری و متنی هماهنگ با هویت برند و سلیقه مخاطبان شما." },
  { number: "03", icon: Play, title: "سناریونویسی", text: "ایده و سناریوی ریلز و استوری برای جلب توجه و انتقال درست پیام برند." },
  { number: "04", icon: Target, title: "استراتژی محتوا", text: "شناخت مخاطب، تعیین مسیر محتوا و ساختن یک برنامه قابل اجرا و هدفمند." }
];

const steps = [
  { n: "۱", title: "شناخت کسب‌وکار", text: "اهداف، خدمات و مخاطبان شما را دقیق‌تر می‌شناسیم." },
  { n: "۲", title: "طراحی مسیر", text: "برنامه محتوایی و اولویت‌های اجرایی را مشخص می‌کنیم." },
  { n: "۳", title: "اجرا و بررسی", text: "محتوا منتشر می‌شود و مسیر با توجه به نتیجه‌ها بهبود پیدا می‌کند." }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [
    ["خدمات", "#services"], ["نمونه‌کارها", "#portfolio"], ["درباره من", "#about"], ["تماس", "#contact"]
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="ادمین نیایش، صفحه اصلی">
          <span className="brand-mark"><Sparkles size={20} /></span>
          <span className="brand-copy"><strong>ادمین نیایش</strong><small>ADMIN.NIAAYESH</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "بستن منو" : "باز کردن منو"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`} aria-label="منوی اصلی">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>شروع همکاری <ArrowLeft size={16} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> همراه رشد کسب‌وکارهای هدفمند</div>
          <h1>پیجت فقط محتوا نمی‌خواد؛<br /><span>استراتژی می‌خواد.</span></h1>
          <p className="hero-lead">از ایده‌پردازی و سناریونویسی تا مدیریت پیج؛ کمک می‌کنم حضورت در اینستاگرام هدفمندتر، منسجم‌تر و حرفه‌ای‌تر دیده شود.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">برای همکاری پیام بده <ArrowUpLeft size={18} /></a>
            <a className="text-link" href="#services">دیدن خدمات <ArrowDownLeft size={17} /></a>
          </div>
          <div className="hero-note"><span className="note-icon"><Check size={16} /></span> برنامه‌ریزی‌شده، خلاقانه و متناسب با برند تو</div>
        </div>
        <div className="hero-art" aria-label="نمای گرافیکی برنامه‌ریزی محتوا">
          <div className="art-glow" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-card art-card-main">
            <div className="art-card-top"><span className="mini-brand"><Sparkles size={17} /></span><span className="live-dot">● در حال رشد</span></div>
            <div className="art-title">محتوای خوب،<br /><em>اتفاقی نیست.</em></div>
            <div className="art-chart"><span style={{height:"28%"}} /><span style={{height:"44%"}} /><span style={{height:"38%"}} /><span style={{height:"63%"}} /><span style={{height:"53%"}} /><span style={{height:"78%"}} /><span style={{height:"94%"}} /></div>
            <div className="chart-caption"><span>مسیر رشد محتوا</span><TrendingUp size={17} /></div>
          </div>
          <div className="floating-chip chip-top"><Sparkles size={16} /> ایده تا اجرا</div>
          <div className="floating-chip chip-bottom"><span className="chip-check"><Check size={13} /></span> استراتژی محتوایی</div>
          <div className="art-star star-a">✳</div><div className="art-star star-b">✳</div>
        </div>
        <a className="scroll-hint" href="#services"><span /> اسکرول کن و بیشتر آشنا شو</a>
      </section>

      <section className="trust-strip">
        <div className="trust-inner"><span>خلاقیت با هدف</span><i /> <span>محتوای منسجم</span><i /> <span>ارتباط واقعی با مخاطب</span><i /> <span>رشد قابل ارزیابی</span></div>
      </section>

      <section className="section-wrap section-block" id="services">
        <div className="section-heading"><div><div className="eyebrow">خدمات من</div><h2>هر چیزی که پیجت<br /><span>برای رشد نیاز داره.</span></h2></div><p>خدماتی متناسب با مرحله‌ای که کسب‌وکارت در آن قرار دارد؛ از ساختن یک مسیر محتوایی تا اجرای منظم آن.</p></div>
        <div className="services-grid">{services.map(({number, icon: Icon, title, text}) => <article className="service-card" key={number}><div className="service-card-top"><span className="service-icon"><Icon size={22} /></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`درخواست همکاری برای ${title}`} className="card-arrow"><ArrowLeft size={18} /></a></article>)}</div>
      </section>

      <section className="portfolio-section" id="portfolio"><div className="section-wrap section-block">
        <div className="section-heading"><div><div className="eyebrow">نگاه محتوایی</div><h2>محتوا باید دیده بشه؛<br /><span>و به یاد بمونه.</span></h2></div><p>هر برند داستان خودش را دارد. این بخش برای نمایش نمونه‌کارهای واقعی و پروژه‌های منتخب آماده شده است.</p></div>
        <div className="portfolio-grid">
          <article className="portfolio-card portfolio-pink"><div className="portfolio-meta"><span>01 / ایده‌پردازی</span><Sparkles size={18}/></div><div className="portfolio-art"><div className="portfolio-sticker">IDEA<br/>TO REEL</div><span className="portfolio-big-type">از ایده<br/>تا اجرا.</span><span className="portfolio-ring" /></div><div className="portfolio-footer"><div><strong>سناریو و ایده ریلز</strong><small>طراحی مفهوم و مسیر روایت</small></div><ArrowUpLeft size={20}/></div></article>
          <article className="portfolio-card portfolio-dark"><div className="portfolio-meta"><span>02 / هویت بصری</span><Sparkles size={18}/></div><div className="portfolio-art"><div className="visual-window"><div className="visual-window-top"><span/><span/><span/></div><div className="visual-window-body"><span className="visual-label">YOUR BRAND</span><span className="visual-headline">MAKE IT<br/><i>MATTER.</i></span><span className="visual-line"/></div></div></div><div className="portfolio-footer"><div><strong>طراحی مسیر محتوایی</strong><small>هماهنگی لحن و ظاهر برند</small></div><ArrowUpLeft size={20}/></div></article>
          <article className="portfolio-card portfolio-lilac"><div className="portfolio-meta"><span>03 / برنامه‌ریزی</span><Sparkles size={18}/></div><div className="portfolio-art"><div className="calendar-art"><div className="calendar-heading">CONTENT PLAN <span>✳</span></div><div className="calendar-days">{["ش","ی","د","س","چ","پ","ج","ش","ی","د","س","چ"].map((d,i)=><span key={i} className={i===3||i===7||i===10?"calendar-active":""}>{d}</span>)}</div><div className="calendar-bars"><i/><i/><i/></div></div></div><div className="portfolio-footer"><div><strong>تقویم محتوایی</strong><small>برنامه‌ریزی منظم و قابل اجرا</small></div><ArrowUpLeft size={20}/></div></article>
        </div>
        <p className="portfolio-disclaimer">طرح‌های بالا پیش‌نمایش گرافیکی هستند؛ نمونه‌کارهای واقعی را می‌توان در این بخش جایگزین کرد.</p>
      </div></section>

      <section className="section-wrap section-block about-section" id="about">
        <div className="about-visual"><div className="about-frame"><div className="about-symbol"><Sparkles size={42}/></div><span className="about-vertical">CREATIVE · STRATEGIC · CONSISTENT</span><span className="about-big">N.</span></div><div className="about-sticker">با فکر<br/>خلق کن ✳</div></div>
        <div className="about-copy"><div className="eyebrow">درباره ادمین نیایش</div><h2>پشت هر محتوای خوب،<br /><span>یک فکر دقیق هست.</span></h2><p>هدف فقط پر کردن تقویم انتشار نیست. محتوا باید با شخصیت برند هماهنگ باشد، برای مخاطب ارزش داشته باشد و بخشی از یک مسیر مشخص را بسازد.</p><div className="about-points"><div><span><Check size={16}/></span> شناخت لحن و هویت برند</div><div><span><Check size={16}/></span> ایده‌پردازی متناسب با مخاطب</div><div><span><Check size={16}/></span> برنامه‌ریزی و اجرای منظم</div></div><a className="button button-outline" href="#contact">بیا درباره پیجت صحبت کنیم <ArrowLeft size={17}/></a></div>
      </section>

      <section className="process-section"><div className="section-wrap section-block"><div className="section-heading"><div><div className="eyebrow">مراحل همکاری</div><h2>شفاف، مرحله‌به‌مرحله،<br/><span>بدون سردرگمی.</span></h2></div><p>یک مسیر روشن کمک می‌کند بدانیم چه کاری، با چه هدفی و در چه زمانی انجام می‌شود.</p></div><div className="steps-grid">{steps.map(s=><article className="step-card" key={s.n}><span className="step-number">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div><div className="eyebrow eyebrow-light">آماده‌ای شروع کنیم؟</div><h2>بیا به پیجت<br/>یک <span>مسیر تازه</span> بدیم.</h2><p>کمی از کسب‌وکارت بگو تا درباره نیازها و مسیر مناسب محتوات صحبت کنیم.</p></div><div className="contact-actions"><a className="button button-white" href="https://instagram.com/admin.niaayesh" target="_blank" rel="noreferrer"><Instagram size={19}/> پیام در اینستاگرام <ArrowUpLeft size={18}/></a><div className="contact-handle"><span className="contact-handle-icon"><MessageCircle size={17}/></span><div><small>اینستاگرام</small><strong>@admin.niaayesh</strong></div><a href="https://instagram.com/admin.niaayesh" target="_blank" rel="noreferrer" aria-label="باز کردن اینستاگرام"><Send size={16}/></a></div></div><div className="contact-decor">N.</div></div></section>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Sparkles size={18}/></span><span className="brand-copy"><strong>ادمین نیایش</strong><small>ADMIN.NIAAYESH</small></span></a><span>ساخته‌شده با فکر، برای رشد هدفمند.</span><a className="back-top" href="#home">بازگشت به بالا ↑</a></footer>
    </main>
  );
}

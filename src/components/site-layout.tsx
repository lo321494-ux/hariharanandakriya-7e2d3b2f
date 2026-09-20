import { Link } from "@tanstack/react-router";
import { ChevronDown, Facebook, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logo from "@/assets/logo.png.asset.json";

const primary = [
  ["Inicio", "/"], ["Raghabananda", "/raghabananda"], ["Hariharananda", "/hariharananda"],
  ["KriyaYoga", "/kriya-yoga"], ["Noticias", "/noticias"],
] as const;
const secondary = [["Empoderamiento", "/empoderamiento"], ["Antecedentes", "/antecedentes"], ["Documentos", "/documentos"], ["Libros", "/libros"]] as const;
const social = { facebook: "https://www.facebook.com/pg/HariharanandaKriyaYoga/", blog: "http://raghabananda.blogspot.com/" };

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="site-stage">
    <header className="site-header"><div className="section-x nav-inner">
      <Link to="/" aria-label="Fundación Hariharananda Kriya Yoga — Inicio" className="brand"><img src={logo.url} alt="Fundación Hariharananda Kriya Yoga" /></Link>
      <nav className="desktop-nav">
        <div className="nav-dropdown"><button type="button">FHKY <ChevronDown /></button><ul>{secondary.map(([label,to])=><li key={to}><Link to={to}>{label}</Link></li>)}</ul></div>
        {primary.map(([label,to])=><Link key={to} to={to} activeProps={{className:"active"}} className="story-link">{label}</Link>)}
        <a className="icon-link" href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
        <a className="icon-link" href={social.blog} target="_blank" rel="noreferrer" aria-label="Blog Raghabananda"><MessageCircle /></a>
        <Link to="/contacto" activeProps={{className:"active"}} className="contact-pill">Contacto</Link>
      </nav>
      <button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open?<X/>:<Menu/>}</button>
    </div>{open && <nav className="mobile-nav">{[...secondary,...primary].map(([label,to])=><Link key={to} to={to} onClick={()=>setOpen(false)}>{label}</Link>)}<Link to="/contacto" onClick={()=>setOpen(false)}>Contacto</Link></nav>}</header>
    <main>{children}</main><Footer />
  </div>;
}

function Footer(){return <footer className="site-footer"><div className="footer-radiance"/><div className="section-x footer-grid">
  <div><div className="footer-logo"><img src={logo.url} alt="" /></div><p className="footer-title">Fundación Hariharananda Kriya Yoga</p><p className="footer-copy">Entidad sin ánimo de lucro, apolítica y sin sectarismos, dedicada a diseminar las enseñanzas de Kriya Yoga de Paramahamsa Hariharananda, Brahmarshi Raghabananda y los maestros del linaje de Babaji Maharaj.</p></div>
  <div><p className="footer-label">SECCIONES</p><ul className="footer-links">{[["Antecedentes","/antecedentes"],["Documentos","/documentos"],["Libros","/libros"],["Kriya Yoga","/kriya-yoga"],["Noticias","/noticias"],["Contacto","/contacto"]].map(([l,t])=><li key={t}><Link to={t}>{l}</Link></li>)}</ul></div>
  <div><p className="footer-label">CONTACTO</p><p className="footer-person">Yogacharya Lía Cristina Upegui G.</p><ul className="contact-list"><li><Mail/><a href="mailto:fundacionhariharananda@gmail.com">fundacionhariharananda@gmail.com</a></li><li><Phone/><a href="tel:+573174293044">Cel: 317 429 3044</a></li><li><MapPin/><span>Envigado, Antioquia — Colombia</span></li></ul><div className="social-row"><a href={social.facebook} target="_blank" rel="noreferrer"><Facebook/>Facebook</a><a href={social.blog} target="_blank" rel="noreferrer"><MessageCircle/>Blog Raghabananda</a></div></div>
</div><div className="footer-bottom"><div className="section-x"><span>© 2026 Fundación Hariharananda Kriya Yoga</span><span>Entidad sin ánimo de lucro · Sigla FHKY · Envigado, Antioquia</span></div></div></footer>}

export function PageTitle({children}:{children:ReactNode}){return <h1 className="page-title">{children}</h1>}
export function SeoMeta(title:string, description:string, image?:string){return {meta:[{title},{name:"description",content:description},{property:"og:title",content:title},{property:"og:description",content:description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},...(image?[{property:"og:image",content:image},{name:"twitter:image",content:image}]:[])]}}

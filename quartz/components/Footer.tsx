import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz</a> | <a 
          href="https://www.iubenda.com/privacy-policy/40609221" 
          class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " 
          title="Privacy Policy ">Privacy Policy</a> | <a 
          href="https://www.iubenda.com/privacy-policy/40609221/cookie-policy" 
          class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " 
          title="Cookie Policy ">Cookie Policy</a> | MP © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor

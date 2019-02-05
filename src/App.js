import React, { Component } from "react";
import theme from "ipfs-css/theme.json"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const Link = ({href, children}) => {
  return (
    <a href={href} className='link blue hover-dark-blue'>{children}</a>
  )
}

const Code = ({children, className}) => {
  return (
    <code className={`dib pa1 br1 bg-snow-muted ${className}`} style={{fontSize: '85%'}}>{children}</code>
  )
}

const CodeBlock = ({children, lang}) => {
  return (
    <div className='mt3 mb4'>
      <div className='bg-charcoal-muted white ttu tracked f7 sans-serif ph3 pv1 nb2'>{lang}</div>
      <SyntaxHighlighter
        language={lang}
        style={tomorrow}
        customStyle={{
          background: theme.colors.charcoal
        }}>{children}</SyntaxHighlighter>
    </div>
  )
}

const Section = ({children}) => {
  return (
    <section className='mv5 mw7 lh-copy'>
      {children}
    </section>
  )
}

const H2 = ({children}) => {
  return (
    <h2 className='f3 mv3'>{children}</h2>
  )
}

const H3 = ({children}) => {
  return (
    <h3 className='f4 mv3'>{children}</h3>
  )
}

const Swatch = ({name, value}) => {
  return (
    <figure className='db dib-ns v-mid ma0 mb4 overflow-hidden'>
      <div title={`.bg-${name}`} className={`v-top dib w-50 w4-ns h4 bg-${name} v-top`} />
      <div title={`.bg-${name}-muted`} className={`v-top dib w-50 w4-ns h4 bg-${name}-muted`} />
      <div className='bg-snow pv3 ph3'>
        <div className='charcoal f5 fw6 lh-copy'>
          {name}
        </div>
        <div className='charcoal-muted monospace f6 lh-copy ttu pt2'>
          {value}
        </div>
      </div>
    </figure>
  )
}

const Space = ({type, direction, size}) => {
  const cls = `${type}${direction}${size}`
  return (
    <div className={`dib bg-yellow-muted mr2 mb2 br2 ${cls}`}>
      <Code>.{cls}</Code>
    </div>
  )
}

const DotGrid = ({children}) => {
  const svg = "data:image/svg+xml,%3csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23F7F8FA' fill-rule='evenodd'%3e%3ccircle r='2'/%3e%3ccircle cx='16' r='2'/%3e%3ccircle cy='16' r='2'/%3e%3ccircle cx='16' cy='16' r='2'/%3e%3c/g%3e%3c/svg%3e"
  return <div style={{background: `white url("${svg}") repeat top left`}} >{children}</div>
}

class App extends Component {
  render() {
    return (
      <DotGrid>
      <div className="sans-serif black ph3">
        <header>
          <h1 className='ma0 pt6 pb5 f2 f1-ns fw6 charcoal lh-copy bb bw3 b--charcoal mw8 center'>
            IPFS Design <sup>✨</sup>
          </h1>
          <p className='f3 mb6 fw3 lh-copy mw8 center montserrat navy'>
            A shared palette for coherent interfaces.
          </p>
        </header>
        <main className='mw8 center'>
          <Section>
            <H2 className='charcoal'>Getting started</H2>
            <p>Add <Link href='https://tachyons.io'><Code>tachyons</Code></Link> and <Link href='https"://github.com/ipfs-shipyard/ipfs-css'><Code>ipfs-css</Code></Link> to your project. Install them via npm
            </p>
            <p>
              <CodeBlock lang='bash'>
                npm install tachyons ipfs-css
              </CodeBlock>
            </p>
            <p>
              If you're using <Code>webpack</Code> or <Code>create-react-app</Code> you can import them from <Code>node_modules</Code>. if your index.css lives in `/src` you would import them like
              <CodeBlock lang='css'>
{`@import "../node_modules/tachyons";
@import "../node_modules/ipfs-css";`}
              </CodeBlock>
            </p>
          </Section>
          <Section>
            <H2>Examples</H2>
            <header className="flex items-center pa3 bg-navy bb bw3 b--aqua">
              <a href="https://ipfs.io" title="home">
                <img alt="IPFS logo" src="https://ipfs.io/images/ipfs-logo.svg" style={{ height: 50 }} className='v-top' />
              </a>
              <h1 className="flex-auto ma0 tr f3 fw2 montserrat aqua">CID inspector</h1>
            </header>
            <CodeBlock lang='html'>
{`<header class="flex items-center pa3 bg-navy bb bw3 b--aqua">
  <a href="https://ipfs.io" title="home">
    <img src="https://ipfs.io/images/ipfs-logo.svg" style="height: 50px" class="v-top" />
  </a>
  <h1 class="flex-auto ma0 tr f3 fw2 montserrat aqua">CID inspector</h1>
</header>`}
            </CodeBlock>
            <H3></H3>
          </Section>
          <Section>
            <H2>Fonts</H2>
            <p className='f4'>
              We use the <span className='f4 fw6 sans-serif'>Inter UI</span> and <span className='montserrat f4 fw4 aqua'>Montserrat</span> font families.
            </p>
            <p>
              Use <span className='fw6'>Inter UI</span> everywhere! Espcially for longer copy that you want people to read.
            </p>
            <p>
              Use <span className='montserrat fw4 aqua'>Montserrat</span> sparingly, for fancy headers and to draw attention to things.
            </p>
          </Section>
          <Section>
          <H2>Font size</H2>
            <p className='f4'>Use the tachyons type scale; a considered set of font sizes that work together.</p>
            <p>Capturing font-sizes as single-purpose css classes adds flexibility; decoupling your design from your markup semantics. An <Code>&lt;h1&gt;</Code> doesn't have to be the largest text on the page.</p>
            <p>Agreeing to a finite set prevents the font-size sprawl that often occurs maintaining css over time. GitHub, at time of writing, has <Link href='https://cssstats.com/stats?url=http%3A%2F%2Fgithub.com&ua=Browser%20Default'>56 unique font sizes</Link> defined.</p>
            <p className='silver ttu tracked f7 bt b--gray tr nb2 pt1'>Experts only 🧬</p>
            <p className='f7'>Use <Code>.f7</Code> to whisper <sup>secrets</sup></p>
            <p className='f6'>Use <Code>.f6</Code> for the <u>small print</u></p>
            <p className='silver ttu tracked f7 bt b--gray tr nb2 mt4 pt1'>General purpose 🌐</p>
            <p className='f5'>Use <Code>.f5</Code> <b>everywhere</b>, to talk to your audience</p>
            <p className='f4'>Use <Code>.f4</Code> to draw attention to something</p>
            <p className='f3'>Use <Code>.f3</Code> for everyday headers</p>
            <p className='silver ttu tracked f7 bt b--gray tr nb2 mt4 pt1'>Special occasions 🎉</p>
            <p className='f2 lh-title'>Use <Code>.f2</Code> to steal the show</p>
            <p className='f1 lh-title'>Use <Code>.f1</Code> to leave no doubt</p>
          </Section>
          <Section>
            <H2>Spacing scale</H2>
            <p className='f4'>Use a finite set of margin and padding sizes.</p>
            <p>Using a scale gives a layout coherence. Pinning the possible values to a fixed set avoids littering the stylesheet with magic numbers. Reusing the same spacing values creates vertical rhythm.</p>
            <p>The tachyons spacing scale is:</p>
            <figure className='f6 f5-m f4-ns ma0 pa0'>
              {Array(8).fill(0).map((_, i) => <Space type='p' direction='b' size={i} />)}
              <figcaption className='nt6'>
                <p>
                  <i>Where:</i>
                </p>
                <p className='f4'>
                  <Code>p</Code> means <b>padding</b>, <br/><Code>b</Code> means <b>bottom</b>, <br/><Code>0</Code> to <Code>7</Code> are the steps available.
                </p>
              </figcaption>
            </figure>
            <figure className='f5 f4-ns ma0 pa0'>
              <figcaption className='mt4 nb4 pl5 f5'>
                You can use it for horizontal padding too.
              </figcaption>
              {Array(8).fill(0).map((_, i) => <div><Space type='p' direction='r' size={i} /></div>)}
            </figure>
            <p>The class names follow the pattern: <Code>type</Code> <Code>direction</Code> <Code>size</Code></p>
            <p><Code>type</Code> is either <Code>p</Code> for <b>padding</b> or <Code>m</Code> for <b>margin</b></p>
            <p><Code>direction</Code> can be <b>a</b>ll, <b>h</b>orizontal, <b>v</b>ertical, <b>l</b>eft, <b>r</b>ight, <b>t</b>op, <b>b</b>ottom</p>
            <div>
            {['all', 'horizontal', 'vertical'].map(direction => (
              <figure className='mv3 ml0 mr3 mr4-ns dib tc v-top'>
                <figcaption className='fw6 pb2'>{direction}</figcaption>
                <Space type='p' direction={direction[0]} size={4} />
              </figure>
            ))}
            </div>
            {['left', 'right', 'top', 'bottom'].map(direction => (
              <figure className='mv3 ml0 mr3 mr4-ns dib tc v-top'>
                <figcaption className='fw6 pb2'>{direction}</figcaption>
                <Space type='p' direction={direction[0]} size={4} />
              </figure>
            ))}
            <p><Code>size</Code> is a notch on the scale, from <Code>0</Code> to <Code>7</Code>. The default is a <i>powers of two</i> scale, <Code>{`[0px, 4px, 8px, 16px, 32px, ...]`}</Code> so each step doubles the amount of space.</p>
            <p>So <Code>.pb4</Code> can be read as <b>p</b>adding <b>b</b>ottom, <b>4</b>th step on the scale.</p>
          </Section>
          <Section>
            <H2>Colors</H2>
            {['navy', 'teal', 'aqua', 'green', 'yellow', 'red', 'charcoal', 'gray', 'snow'].map(k => (
              <Swatch name={k} value={theme.colors[k]} key={k} />
            ))}
          </Section>
        </main>
        <footer className="mt6 pb5 mw8 center db tc tl-ns bw2 bt b--charchoal">
          <h1 className="fw6 f3 lh-title ma0 pt2 charcoal">IPFS Design</h1>
        </footer>
      </div>
      </DotGrid>
    );
  }
}

export default App;

import BasicDiagram from './BasicDiagram';
export default function BasicVisual({ slug, memory }: { slug: string; memory: string[] }) {
  return <figure className="basic-visual">
    <BasicDiagram slug={slug} />
    <figcaption><span className="kicker">Remember these three things</span><ol className="basic-memory">{memory.map((item, i) => <li key={item}><span aria-hidden="true">0{i + 1}</span>{item}</li>)}</ol></figcaption>
  </figure>;
}

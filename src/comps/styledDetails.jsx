export default function StyledDetails(props) {
  return (
    <details className="mb-4 border-b-slate-200 p-1 border-b-2 text-slate-100">
      <summary className="font-bold text-lg">{props.title}</summary>
      <>{props.children}</>
    </details>
  );
}

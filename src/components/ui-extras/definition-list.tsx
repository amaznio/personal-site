import { MonoLabel } from "./mono-label";

type DefinitionListProps = {
  items: { label: string; value: string }[];
};

export function DefinitionList({ items }: DefinitionListProps) {
  return (
    <dl className="grid grid-cols-[max-content_1fr] gap-x-8 gap-y-3 border-t pt-5 text-[15px]">
      {items.map(({ label, value }) => (
        <div key={label} className="contents">
          <dt>
            <MonoLabel>{label}</MonoLabel>
          </dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

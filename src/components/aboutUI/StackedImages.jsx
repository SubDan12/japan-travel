import Photo from "./Photo";

export default function StackedImages({ a, b }) {
  return (
    <div className="relative h-31.25 w-40">
      <div className="absolute left-0 top-0">
        <Photo src={a} size="md" />
      </div>
      <div className="absolute left-13.75 top-13.75">
        <Photo src={b} size="sm" />
      </div>
    </div>
  );
}

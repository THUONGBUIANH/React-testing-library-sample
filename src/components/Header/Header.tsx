import "./Header.css";

export default function Header({ title }: { title?: string }) {
  return (
    <>
      <h1 data-testid="header" className="header">
        {title}
      </h1>
    </>
  );
}

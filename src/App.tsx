import "./styles.css";
import DesignSystemButton from "./components/DesignSystemButton";

const Link = (props: { label: string; to: string }) => (
  <a href={props.to}>{props.label}</a>
);

export default function App() {
  return (
    <div className="App">
      <h1>Polymorphic Components</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        {/* 'myProp' prop is missing */}
        <DesignSystemButton as="a" href="#">
          Hi
        </DesignSystemButton>

        {/* href' is not assignable to HTMLButtonElement */}
        <DesignSystemButton href="#">Hi</DesignSystemButton>

        <DesignSystemButton myProp={10}>Hi</DesignSystemButton>

        {/*'to' prop is missing */}
        <DesignSystemButton as={Link} label="my link" myProp={10} />

        {/* Using Custom Components */}
        <DesignSystemButton as={Link} label="my link" to="#" myProp={10} />
      </div>
    </div>
  );
}

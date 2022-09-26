import Dashboard from "../components/Dashboard";

const staticItems = [
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

export default function Home() {
  return <Dashboard items={staticItems} />;
}

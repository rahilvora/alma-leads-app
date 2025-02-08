export default function Button({ children }: { children: React.ReactNode }) {
  return <button className="bg-blue-500 text-white p-2 rounded-md">{children}</button>;
}
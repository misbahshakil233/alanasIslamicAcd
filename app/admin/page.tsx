import AdminClient from "./AdminClient";

async function getStudents() {
  const res = await fetch(
    "http://localhost:3000/api/students",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function AdminPage() {
  const data = await getStudents();

  return <AdminClient students={data.students} />;
}
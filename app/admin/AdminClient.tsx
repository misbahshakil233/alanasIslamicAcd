"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Student {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  gender: string;
  country: string;
  createdAt: string;
}

export default function AdminClient({
  students,
}: {
  students: Student[];
}) {
  const [studentList, setStudentList] =
    useState<Student[]>(students);

  const [search, setSearch] = useState("");

  const router = useRouter();

  const logout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/admin/login");
  };

  const deleteStudent = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `/api/students/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        setStudentList(
          studentList.filter(
            (student) => student._id !== id
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredStudents = studentList.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-50 p-8 md:p-12">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">
            Total Students
          </h3>

          <p className="text-3xl font-bold text-blue-600">
            {studentList.length}
          </p>
        </div>

      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full md:w-96 border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold">
            Registered Students
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">
                  Name
                </th>
                <th className="p-4 text-left">
                  Email
                </th>
                <th className="p-4 text-left">
                  Phone
                </th>
                <th className="p-4 text-left">
  Course
</th>

<th className="p-4 text-left">
  Gender
</th>

<th className="p-4 text-left">
  Country
</th>

<th className="p-4 text-left">
  Registered
</th>

<th className="p-4 text-left">
  Actions
</th>
                
              </tr>
            </thead>

            <tbody>

              {filteredStudents.map(
                (student) => (
                  <tr
                    key={student._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {student.name}
                    </td>

                    <td className="p-4">
                      {student.email}
                    </td>

                    <td className="p-4">
                      {student.phone}
                    </td>

                    <td className="p-4">
  {student.course}
</td>

<td className="p-4">
  {student.gender}
</td>

<td className="p-4">
  {student.country}
</td>

<td className="p-4">
  {new Date(student.createdAt).toLocaleDateString()}
</td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          deleteStudent(
                            student._id
                          )
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}
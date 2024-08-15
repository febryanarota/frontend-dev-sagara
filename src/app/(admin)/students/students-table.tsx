"use client";

import { student } from "@/lib/dataType";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronDown, BiSortAlt2 } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { IoFilter, IoSettingsOutline } from "react-icons/io5";
import { dataStudent } from "@/data/students-data";
import AddModal from "./add-modal";
import { FiEdit2 } from "react-icons/fi";
import EditModal from "./edit-modal";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";

export default function StudentsTable() {
  const [data, setData] = useState<student[]>([]);
  const [editData, setEditData] = useState<student | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  const [isSelectionOpen, setSelectionOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setData(dataStudent);
  }, [dataStudent]);

  function openModal() {
    const modal = document.getElementById("add-modal");
    modal?.classList.remove("hidden");
    modal?.classList.add("flex");
  }

  const addStudent = async (newStudent: student) => {
    setData((prevData) => [...prevData, newStudent]);
  };

  const editStudent = async (newStudent: student) => {
    setData((prevData) => {
      let newData = prevData.map((item) => {
        if (item.id === newStudent.id) {
          return newStudent;
        }
        return item;
      });
      return newData;
    });
  };

  const handleEdit = (oldData: student) => {
    setEditData(oldData);
    setEditModalOpen(true); // Open modal
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditData(null); // Clear selected data
  };

  const handleDelete = (oldData: student) => {
    setData((prevData) => {
      let newData = prevData.filter((item) => item.id !== oldData.id);
      return newData;
    });
  };

  const handleToggle = (index: number) => {
    setCheckedItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="my-5">
      <AddModal addStudent={addStudent} />
      {isEditModalOpen && editData && (
        <EditModal
          editStudent={editStudent}
          oldData={editData}
          onClose={closeEditModal}
        />
      )}
      <div className="flex sm:flex-row sm:justify-between flex-col-reverse gap-2">
        <div className="flex flex-row gap-3 justify-between sm:justify-normal">
          <div className="relative">
            <div
              className=" btn-secondary hover:cursor-pointer"
              onClick={() => {
                setFiltersOpen(!isFiltersOpen);
              }}
            >
              <IoFilter />
              <p>Filters</p>
            </div>
            {isFiltersOpen && (
              <div className="absolute flex flex-col gap-2 bg-white-base p-5 mt-2 rounded-md shadow-md max-w-[20rem]">
                <button className="btn-secondary">
                  Instance
                  <BiChevronDown className="ml-12" />
                </button>
                <input
                  type="text"
                  className="btn-secondary w-full bg-gray-accent"
                  placeholder="is"
                />
                <input
                  type="text"
                  className="btn-secondary w-full bg-gray-accent"
                  placeholder="Enter Condition"
                />
                <button className="btn-primary w-full text-center items-center justify-center flex">
                  Save
                </button>
              </div>
            )}
          </div>
          <button
            className="btn-primary"
            onClick={() => {
              openModal();
            }}
          >
            <FaPlus />
            <p>Add User</p>
          </button>
        </div>

        <div className="flex flex-row gap-3">
          <div className="flex flex-row sm:grow-0 grow">
            <div className="flex flex-row grow btn-secondary font-medium">
              <CiSearch className="w-[20px] h-[20px]" />
              <input
                type="text"
                placeholder="Search"
                className="bg-opacity-0 border-1 focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="relative">
            <button className="btn-secondary" onClick={() => {setSelectionOpen(!isSelectionOpen)}}>
              <IoSettingsOutline className="w-[20px] h-[20px]" />
            </button>
            { isSelectionOpen &&
              <div className="absolute right-0 mt-3 flex flex-col w-fit bg-white-base p-5 rounded-md shadow-md">
                <div className="flex flex-col gap-2">
                  {[
                    "Full Name",
                    "Email Address",
                    "Phone Number",
                    "Instance",
                    "Created At",
                  ].map((label, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center hover:cursor-pointer"
                      onClick={() => handleToggle(index)}
                    >
                      {checkedItems[index] ? (
                        <MdOutlineCheckBox className="text-green-accent"/>
                      ) : (
                        <MdCheckBoxOutlineBlank />
                      )}
                      <p className="inline whitespace-nowrap ml-2">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto mt-2 rounded-t-md border-2 border-slate-accent-3 shadow-custom">
        <table className="w-full overflow-auto min-w-full table-auto border-collapse ">
          <thead className="bg-slate-accent-2">
            <tr className="table_col">
              <th>
                <div className="w-[30px] mx-5"></div>
              </th>
              <th>
                <div className="flex flex-row justify-center items-center text-gray-accent">
                  <p>Full Name</p>
                  <BiSortAlt2 />
                </div>
              </th>
              <th>
                <div className="flex flex-row justify-center items-center text-gray-accent">
                  <p>Email Address</p>
                  <BiSortAlt2 />
                </div>
              </th>
              <th>
                <div className="flex flex-row justify-center items-center text-gray-accent">
                  <p>Phone Number</p>
                  <BiSortAlt2 />
                </div>
              </th>
              <th>
                <div className="flex flex-row justify-center items-center text-gray-accent">
                  <p>Instance</p>
                  <BiSortAlt2 />
                </div>
              </th>
              <th>
                <div className="flex flex-row justify-center items-center text-gray-accent">
                  <p>Created At</p>
                  <BiSortAlt2 />
                </div>
              </th>
              <th>
                <p>Action</p>
              </th>
            </tr>
          </thead>
          <tbody className="h-full w-fit min-w-fit">
            {data.map((item, index) => (
              <tr
                key={index}
                className="table_body border-t-2 border-gray-accent-3 bg-white-base"
              >
                <td>
                  <Image
                    src={"/icons/profile.png"}
                    alt="Profile"
                    width={50}
                    height={50}
                    className="rounded-full hover:cursor-pointer w-[30px] h-[30px] mx-5"
                  />
                </td>
                <td>
                  <p className="hover:text-red-accent hover:cursor-pointer">
                    {item.name}
                  </p>
                </td>
                <td>
                  <p>{item.email}</p>
                </td>
                <td>
                  <p>{item.phone}</p>
                </td>
                <td>
                  <p>{item.instance}</p>
                </td>
                <td>
                  <p>{item.createdAt}</p>
                </td>
                <td>
                  <button className="mr-2" onClick={() => handleEdit(item)}>
                    <FiEdit2 className="text-orange-400" />
                  </button>
                  <button className="mr-2" onClick={() => handleDelete(item)}>
                    <FaRegTrashAlt className="text-red-accent" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-row justify-between items-center p-3 bg-white-base border-l-2 border-r-2 border-b-2 border-gray-accent-3 rounded-b-md shadow-custom">
        <button className="btn-secondary">Previous</button>
        <div className="flex flex-row gap-5 items-center">
          <p>...</p>
          <p>8</p>
          <p className="bg-red-accent px-3 py-1 text-white-base font-bold rounded-md">
            9
          </p>
          <p>10</p>
          <p>...</p>
        </div>
        <button className="btn-secondary">Next</button>
      </div>
    </div>
  );
}

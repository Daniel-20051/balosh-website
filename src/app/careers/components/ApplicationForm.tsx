"use client";
import { FormEvent, useMemo, useState } from "react";
import CustomSelect, { Option } from "./CustomSelect";

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roleOptions: Option[] = useMemo(
    () => [
      { value: "account-officer-analyst", label: "Account officer/analyst" },
      { value: "admin-storekeeper", label: "Admin/storekeeper" },
      { value: "operations-officer", label: "Operations officer" },
      { value: "parking-attendant", label: "Parking attendant" },
      { value: "supervisor", label: "Supervisor" },
      { value: "ticket-attendant", label: "Ticket attendant" },
      { value: "others", label: "Others" },
    ],
    []
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const file = formData.get("cv") as File | null;
    if (!file) {
      alert("Please upload your CV in PDF format.");
      return;
    }
    if (file.type !== "application/pdf") {
      alert("CV must be a PDF file.");
      return;
    }
    if (file.size > 1024 * 1024) {
      alert("CV must be 1MB or smaller.");
      return;
    }

    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Application submitted successfully! We will be in touch.");
      form.reset();
    } catch (error) {
      console.error(error);
      alert(
        "There was a problem submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 flex max-w-5xl mx-auto my-15 flex-col rounded-2xl border-2 border-gray-100 bg-gray-50 p-6  md:p-8"
    >
      <div>
        <label
          htmlFor="cv"
          className="block  text-sm font-medium text-gray-800"
        >
          Upload CV <span className="text-red-500">*</span>
        </label>
        <input
          id="cv"
          name="cv"
          type="file"
          accept=".pdf"
          required
          className="mt-2 block w-full text-sm  text-gray-900 file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-orange-600"
        />
        <p className="mt-1 text-xs text-gray-500">Max size: 1MB, PDF only.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-800"
          >
            First name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Jane"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-800"
          >
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-800"
        >
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          pattern="[0-9+\-()\s]{7,}"
          required
          className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="+234 801 234 5678"
        />
      </div>

      <CustomSelect
        id="role"
        name="role"
        label="Role applying for"
        required
        placeholder="Select a role"
        options={roleOptions}
      />

      <div className="place-self-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center cursor-pointer  justify-center rounded-lg bg-orange-500 px-6 py-3 text-white font-medium shadow-sm transition hover:bg-orange-600 disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

"use client";

export default function WriteForm() {
  return (
    <div>
      <input
        type="text"
        placeholder="Description"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Index"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="number"
        placeholder="Page"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-primary">Submit</button>
    </div>
  );
}

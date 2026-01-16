import Loader from "@/components/UI/Loader";

export default function Loading() {
    return (
      <div className="fixed inset-0 min-w-screen bg-gray-50  flex items-center justify-center">
        <Loader/>
      </div>
    );
  }
  
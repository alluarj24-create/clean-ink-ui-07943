import AdminLayout from "@/components/admin/AdminLayout";

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = "Loading..." }: LoadingStateProps) {
  return (
    <AdminLayout>
      <div className="flex items-center justify-center h-96">
        <div className="animate-pulse text-muted-foreground">{message}</div>
      </div>
    </AdminLayout>
  );
}

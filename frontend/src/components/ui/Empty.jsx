import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const EmptyState = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <div className="rounded-lg border-2 border-dashed p-8 flex flex-col items-center max-w-md text-center">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          No products found
        </h3>
        
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Get started by creating your first product
        </p>

        <Button className="flex items-center gap-2" onClick = {()=> navigate("/create")}>
          <Plus className="h-4 w-4" />
          Create Product
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
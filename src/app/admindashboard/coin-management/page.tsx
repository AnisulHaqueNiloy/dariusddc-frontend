import CreatePackageForm from "./CreatePackageForm";
import PackageSummary from "./PackageSummary";

export default function page() {
  return (
    <div className="container mx-auto">
      <CreatePackageForm />

      <PackageSummary />
    </div>
  );
}
